'use server';
import 'server-only';

import { PrismaClient } from '@prisma/client';
import {
  CategorySchema,
  Restaurant,
  RestaurantCreateInputSchema,
  RestaurantSchema,
  Review,
} from '@/types/generated';
import { z } from 'zod';
import { getSession } from '@auth0/nextjs-auth0';
import { getUserIdFromIdToken } from './utils';

const prisma = new PrismaClient();

const enhanceRestaurant = (
  restaurant: Restaurant & {
    reviews: Review[];
  },
) => {
  const { reviews, ...rest } = restaurant;
  const averageReview =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  return {
    ...rest,
    averageReview: isNaN(averageReview) ? undefined : averageReview,
    reviewCount: reviews.length,
  };
};

export const getRestaurants = async () => {
  const data = await prisma.restaurant.findMany({
    include: {
      categories: true,
      reviews: true,
    },
  });

  return z
    .array(
      RestaurantSchema.extend({
        categories: z.array(CategorySchema),
        averageReview: z.number().optional(),
        reviewCount: z.number(),
      }),
    )
    .parseAsync(data.map(enhanceRestaurant));
};

export const getRestaurant = async (id: number) => {
  const data = await prisma.restaurant.findFirst({
    where: {
      id,
    },
    include: {
      categories: true,
      reviews: true,
    },
  });

  if (!data) {
    return null;
  }

  return RestaurantSchema.extend({
    categories: z.array(CategorySchema),
    averageReview: z.number().optional(),
    reviewCount: z.number(),
  }).parseAsync(enhanceRestaurant(data));
};

export const addRestaurant = async <State>(
  prevState: State,
  formData: FormData,
) => {
  const session = await getSession();

  if (!session?.idToken) {
    throw new Error('Unauthorized');
  }

  const payload = {
    name: formData.get('name'),
    createdBy: getUserIdFromIdToken(session.idToken),
  };

  const validatedFields = await RestaurantCreateInputSchema.refine(
    (data) => data.name !== '',
    { message: 'Name must not be empty', path: ['name'] },
  ).safeParseAsync(payload);

  if (!validatedFields.success) {
    return {
      ...prevState,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.restaurant.create({ data: validatedFields.data });
    return { ...validatedFields.data, errors: undefined };
  } catch (error) {
    console.error(error);
    return {
      ...prevState,
      errors: { send: ['Failed to submit a restaurant'] },
    };
  }
};
