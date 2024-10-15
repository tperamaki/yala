import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';
import { RestaurantUpdateWithoutCategoriesInputSchema } from './RestaurantUpdateWithoutCategoriesInputSchema';
import { RestaurantUncheckedUpdateWithoutCategoriesInputSchema } from './RestaurantUncheckedUpdateWithoutCategoriesInputSchema';

export const RestaurantUpdateToOneWithWhereWithoutCategoriesInputSchema: z.ZodType<Prisma.RestaurantUpdateToOneWithWhereWithoutCategoriesInput> = z.object({
  where: z.lazy(() => RestaurantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => RestaurantUpdateWithoutCategoriesInputSchema),z.lazy(() => RestaurantUncheckedUpdateWithoutCategoriesInputSchema) ]),
}).strict();

export default RestaurantUpdateToOneWithWhereWithoutCategoriesInputSchema;
