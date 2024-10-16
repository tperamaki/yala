'use server';
import 'server-only';

import prisma from './client';
import { getSession } from '@auth0/nextjs-auth0';
import { getUserIdFromIdToken } from './utils';

type SignalVariant = 'UP' | 'DOWN';

export const sendThumbSignal = async (
  signalVariant: SignalVariant,
  reviewedRestaurantId: number,
  reviewCreatedBy: String,
): Promise<boolean> => {
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
