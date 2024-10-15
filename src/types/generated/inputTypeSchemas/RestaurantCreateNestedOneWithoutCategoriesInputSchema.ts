import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RestaurantCreateWithoutCategoriesInputSchema } from './RestaurantCreateWithoutCategoriesInputSchema';
import { RestaurantUncheckedCreateWithoutCategoriesInputSchema } from './RestaurantUncheckedCreateWithoutCategoriesInputSchema';
import { RestaurantCreateOrConnectWithoutCategoriesInputSchema } from './RestaurantCreateOrConnectWithoutCategoriesInputSchema';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';

export const RestaurantCreateNestedOneWithoutCategoriesInputSchema: z.ZodType<Prisma.RestaurantCreateNestedOneWithoutCategoriesInput> = z.object({
  create: z.union([ z.lazy(() => RestaurantCreateWithoutCategoriesInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutCategoriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RestaurantCreateOrConnectWithoutCategoriesInputSchema).optional(),
  connect: z.lazy(() => RestaurantWhereUniqueInputSchema).optional()
}).strict();

export default RestaurantCreateNestedOneWithoutCategoriesInputSchema;
