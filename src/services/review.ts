'use server';
import 'server-only';

import { PrismaClient } from '@prisma/client';
import {
  ReviewCreateInputSchema,
  ReviewFindManyArgsSchema,
  ReviewSchema,
} from '@/types/generated';
import { z } from 'zod';
import { redirect } from 'next/navigation';
import { getSession } from '@auth0/nextjs-auth0';
import { getUserIdFromIdToken } from './utils';

const prisma = new PrismaClient();

export const getReviews = async (restaurantId: number) => {
  const findManyArgs = ReviewFindManyArgsSchema.parse({
    where: { restaurantId },
  });
  return z
    .array(ReviewSchema)
    .parseAsync(await prisma.review.findMany(findManyArgs));
};

export const addReview = async (formData: FormData) => {
  const session = await getSession();

  if (!session?.idToken) {
    throw new Error('Unauthorized');
  }

  const payload = {
    restaurant: {
      connect: { id: parseInt(String(formData.get('restaurant')), 10) },
    },
    rating: parseInt(String(formData.get('rating')), 10),
    createdBy: getUserIdFromIdToken(session.idToken),
  };

  const data = ReviewCreateInputSchema.parse(payload);

  await prisma.review.create({ data });

  redirect('/restaurants');
};
