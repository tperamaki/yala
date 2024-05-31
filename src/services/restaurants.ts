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

export const addRestaurant = async (formData: FormData) => {
  const payload = {
    name: formData.get('name'),
  };

  const data = RestaurantCreateInputSchema.parse(payload);

  await prisma.restaurant.create({ data });

  redirect('/restaurants');
};
