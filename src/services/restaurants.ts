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

  return RestaurantSchema.extend({
    categories: z.array(CategorySchema),
    reviews: z.array(ReviewSchema),
  }).parseAsync(data);
};

export const addRestaurant = async (formData: FormData) => {
  const session = await getSession();

  if (!session?.idToken) {
    throw new Error('Unauthorized');
  }

  const payload = {
    name: formData.get('name'),
    createdBy: getUserIdFromIdToken(session.idToken),
  };

  const data = RestaurantCreateInputSchema.parse(payload);

  await prisma.restaurant.create({ data });

  redirect('/restaurants');
};
