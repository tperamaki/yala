import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RestaurantCreateWithoutReviewsInputSchema } from './RestaurantCreateWithoutReviewsInputSchema';
import { RestaurantUncheckedCreateWithoutReviewsInputSchema } from './RestaurantUncheckedCreateWithoutReviewsInputSchema';
import { RestaurantCreateOrConnectWithoutReviewsInputSchema } from './RestaurantCreateOrConnectWithoutReviewsInputSchema';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';

export const RestaurantCreateNestedOneWithoutReviewsInputSchema: z.ZodType<Prisma.RestaurantCreateNestedOneWithoutReviewsInput> = z.object({
  create: z.union([ z.lazy(() => RestaurantCreateWithoutReviewsInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutReviewsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RestaurantCreateOrConnectWithoutReviewsInputSchema).optional(),
  connect: z.lazy(() => RestaurantWhereUniqueInputSchema).optional()
}).strict();

export default RestaurantCreateNestedOneWithoutReviewsInputSchema;
