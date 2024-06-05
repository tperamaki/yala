'use server';
import 'server-only';

import { PrismaClient } from '@prisma/client';
import {
  ReviewCreateInputSchema,
  ReviewFindManyArgsSchema,
  ReviewSchema,
} from '@/types/generated';
import { z } from 'zod';

const prisma = new PrismaClient();

export const getReviews = async (restaurantId: number) => {
  const findManyArgs = ReviewFindManyArgsSchema.parse({
    where: { restaurantId },
  });
  return z
    .array(ReviewSchema)
    .parseAsync(await prisma.review.findMany(findManyArgs));
};

export const addReview = async <State>(
  prevState: State,
  formData: FormData,
) => {
  const payload = {
    restaurant: {
      connect: { id: parseInt(String(formData.get('restaurant')), 10) },
    },
    rating: parseInt(String(formData.get('rating')), 10),
  };

  const validatedFields = await ReviewCreateInputSchema.safeParseAsync(payload);

  if (!validatedFields.success) {
    return {
      ...prevState,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.review.create({ data: validatedFields.data });
    console.log('Created a new review');
    return { ...validatedFields.data, errors: undefined };
  } catch (error) {
    console.error(error);
    return { ...prevState, errors: { send: ['Failed to submit review'] } };
  }
};
