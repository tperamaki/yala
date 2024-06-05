'use server';
import 'server-only';

import { PrismaClient } from '@prisma/client';
import {
  CategorySchema,
  RestaurantCreateInputSchema,
  RestaurantSchema,
  ReviewSchema,
} from '@/types/generated';
import { z } from 'zod';
import { redirect } from 'next/navigation';
import { getSession } from '@auth0/nextjs-auth0';
import { getUserIdFromIdToken } from './utils';

const prisma = new PrismaClient();

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
        reviews: z.array(ReviewSchema),
      }),
    )
    .parseAsync(data);
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
    console.log('Created a new restaurant');
    return { ...validatedFields.data, errors: undefined };
  } catch (error) {
    console.error(error);
    return {
      ...prevState,
      errors: { send: ['Failed to submit a restaurant'] },
    };
  }
};
