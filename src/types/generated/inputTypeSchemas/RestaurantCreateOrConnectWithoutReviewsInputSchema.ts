import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';
import { RestaurantCreateWithoutReviewsInputSchema } from './RestaurantCreateWithoutReviewsInputSchema';
import { RestaurantUncheckedCreateWithoutReviewsInputSchema } from './RestaurantUncheckedCreateWithoutReviewsInputSchema';

export const RestaurantCreateOrConnectWithoutReviewsInputSchema: z.ZodType<Prisma.RestaurantCreateOrConnectWithoutReviewsInput> =
  z
    .object({
      where: z.lazy(() => RestaurantWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => RestaurantCreateWithoutReviewsInputSchema),
        z.lazy(() => RestaurantUncheckedCreateWithoutReviewsInputSchema),
      ]),
    })
    .strict();

export default RestaurantCreateOrConnectWithoutReviewsInputSchema;
