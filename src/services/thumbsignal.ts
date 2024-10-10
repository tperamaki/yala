'use server';
import 'server-only';

import prisma from './client';
import { z } from 'zod';
import { getSession } from '@auth0/nextjs-auth0';
import { getUserIdFromIdToken } from './utils';

import {
  ThumbsignalCreateInputSchema,
  Thumbsignal,
  ThumbsignalFindManyArgsSchema,
  ThumbsignalSchema,
  ThumbsignalUpsertArgsSchema,
} from '@/types/generated';

type SignalVariant = 'UP' | 'DOWN';

/**
 *
 * TODO: Questions:
 * 1: What is prevState? Is it needed NO
 * 2: How to debug server-only methods? terminal
 * 3: Is this even getting called from the onClick-handler? Yes.
 * 4: How do I see current database / is it even possible?
 *
 */

export const getThumbSignals = async (
  restaurantId: number,
  reviewCreatedBy: String,
) => {
  const session = await getSession();

  if (!session?.idToken) {
    throw new Error('Unauthorized');
  }

  const findManyArgs = ThumbsignalFindManyArgsSchema.parse({
    where: { restaurantId, reviewCreatedBy },
  });
  return z
    .array(ThumbsignalSchema)
    .parseAsync(await prisma.thumbsignal.findMany(findManyArgs));
};

export const sendThumbSignal = async (
  signalVariant: SignalVariant,
  reviewedRestaurantId: number,
  reviewCreatedBy: String,
): Promise<boolean> => {
  console.log('Que?');
  const session = await getSession();

  if (!session?.idToken) {
    throw new Error('Unauthorized');
  }

  const payload = {
    review: {
      connect: {
        restaurantId: parseInt(String(reviewedRestaurantId)),
        createdBy: String(reviewCreatedBy),
      },
    },
    signalVariant: signalVariant,
    createdBy: getUserIdFromIdToken(session.idToken),
  };

  try {
    console.log(
      'Create thumbsignal ' + JSON.stringify(payload) + ' ' + signalVariant,
    );

    await prisma.thumbsignal.upsert({
      where: {
        reviewedRestaurantId_reviewCreatedBy_createdBy: {
          reviewedRestaurantId: payload.review.connect.restaurantId,
          reviewCreatedBy: payload.review.connect.createdBy,
          createdBy: payload.createdBy,
        },
      },
      update: {
        signalVariant: signalVariant,
      },
      create: {
        review: {
          connect: {
            restaurantId_createdBy: {
              restaurantId: payload.review.connect.restaurantId,
              createdBy: payload.review.connect.createdBy,
            },
          },
        },
        createdBy: payload.createdBy,
        signalVariant: signalVariant,
      },
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
