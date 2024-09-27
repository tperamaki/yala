import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RestaurantUpdateWithoutReviewsInputSchema } from './RestaurantUpdateWithoutReviewsInputSchema';
import { RestaurantUncheckedUpdateWithoutReviewsInputSchema } from './RestaurantUncheckedUpdateWithoutReviewsInputSchema';
import { RestaurantCreateWithoutReviewsInputSchema } from './RestaurantCreateWithoutReviewsInputSchema';
import { RestaurantUncheckedCreateWithoutReviewsInputSchema } from './RestaurantUncheckedCreateWithoutReviewsInputSchema';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';

export const RestaurantUpsertWithoutReviewsInputSchema: z.ZodType<Prisma.RestaurantUpsertWithoutReviewsInput> = z.object({
  update: z.union([ z.lazy(() => RestaurantUpdateWithoutReviewsInputSchema),z.lazy(() => RestaurantUncheckedUpdateWithoutReviewsInputSchema) ]),
  create: z.union([ z.lazy(() => RestaurantCreateWithoutReviewsInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutReviewsInputSchema) ]),
  where: z.lazy(() => RestaurantWhereInputSchema).optional()
}).strict();

export default RestaurantUpsertWithoutReviewsInputSchema;
