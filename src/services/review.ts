'use server';
import 'server-only';

import prisma from './client';
import {
  ReviewCreateInputSchema,
  ReviewFindManyArgsSchema,
  ReviewSchema,
} from '@/types/generated';
import { z } from 'zod';
import { getSession } from '@auth0/nextjs-auth0';
import { getUserIdFromIdToken } from './utils';

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
  const session = await getSession();

  if (!session?.idToken) {
    throw new Error('Unauthorized');
  }

  const payload = {
    restaurant: {
      connect: { id: parseInt(String(formData.get('restaurantId')), 10) },
    },
    rating: parseInt(String(formData.get('rating')), 10),
    comment: String(formData.get('comment')),
    createdBy: getUserIdFromIdToken(session.idToken),
  };

  const validatedFields = await ReviewCreateInputSchema.safeParseAsync(payload);

  if (!validatedFields.success) {
    return {
      ...prevState,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.review.upsert({
      where: {
        restaurantId_createdBy: {
          restaurantId: payload.restaurant.connect.id,
          createdBy: payload.createdBy,
        },
      },
      update: {
        rating: validatedFields.data.rating,
        comment: validatedFields.data.comment,
      },
      create: { ...validatedFields.data },
    });
    return { ...validatedFields.data, errors: undefined };
  } catch (error) {
    console.error(error);
    return { ...prevState, errors: { send: ['Failed to submit review'] } };
  }
};
