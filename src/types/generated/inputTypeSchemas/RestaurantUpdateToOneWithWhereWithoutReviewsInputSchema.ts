import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';
import { RestaurantUpdateWithoutReviewsInputSchema } from './RestaurantUpdateWithoutReviewsInputSchema';
import { RestaurantUncheckedUpdateWithoutReviewsInputSchema } from './RestaurantUncheckedUpdateWithoutReviewsInputSchema';

export const RestaurantUpdateToOneWithWhereWithoutReviewsInputSchema: z.ZodType<Prisma.RestaurantUpdateToOneWithWhereWithoutReviewsInput> =
  z
    .object({
      where: z.lazy(() => RestaurantWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => RestaurantUpdateWithoutReviewsInputSchema),
        z.lazy(() => RestaurantUncheckedUpdateWithoutReviewsInputSchema),
      ]),
    })
    .strict();

export default RestaurantUpdateToOneWithWhereWithoutReviewsInputSchema;
