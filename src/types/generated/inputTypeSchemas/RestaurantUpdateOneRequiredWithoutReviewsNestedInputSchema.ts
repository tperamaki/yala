import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RestaurantCreateWithoutReviewsInputSchema } from './RestaurantCreateWithoutReviewsInputSchema';
import { RestaurantUncheckedCreateWithoutReviewsInputSchema } from './RestaurantUncheckedCreateWithoutReviewsInputSchema';
import { RestaurantCreateOrConnectWithoutReviewsInputSchema } from './RestaurantCreateOrConnectWithoutReviewsInputSchema';
import { RestaurantUpsertWithoutReviewsInputSchema } from './RestaurantUpsertWithoutReviewsInputSchema';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';
import { RestaurantUpdateToOneWithWhereWithoutReviewsInputSchema } from './RestaurantUpdateToOneWithWhereWithoutReviewsInputSchema';
import { RestaurantUpdateWithoutReviewsInputSchema } from './RestaurantUpdateWithoutReviewsInputSchema';
import { RestaurantUncheckedUpdateWithoutReviewsInputSchema } from './RestaurantUncheckedUpdateWithoutReviewsInputSchema';

export const RestaurantUpdateOneRequiredWithoutReviewsNestedInputSchema: z.ZodType<Prisma.RestaurantUpdateOneRequiredWithoutReviewsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RestaurantCreateWithoutReviewsInputSchema),
          z.lazy(() => RestaurantUncheckedCreateWithoutReviewsInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => RestaurantCreateOrConnectWithoutReviewsInputSchema)
        .optional(),
      upsert: z
        .lazy(() => RestaurantUpsertWithoutReviewsInputSchema)
        .optional(),
      connect: z.lazy(() => RestaurantWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => RestaurantUpdateToOneWithWhereWithoutReviewsInputSchema),
          z.lazy(() => RestaurantUpdateWithoutReviewsInputSchema),
          z.lazy(() => RestaurantUncheckedUpdateWithoutReviewsInputSchema),
        ])
        .optional(),
    })
    .strict();

export default RestaurantUpdateOneRequiredWithoutReviewsNestedInputSchema;
