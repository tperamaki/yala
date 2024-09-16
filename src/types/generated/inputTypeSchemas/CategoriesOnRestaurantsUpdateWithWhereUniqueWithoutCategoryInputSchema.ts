import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoriesOnRestaurantsWhereUniqueInputSchema } from './CategoriesOnRestaurantsWhereUniqueInputSchema';
import { CategoriesOnRestaurantsUpdateWithoutCategoryInputSchema } from './CategoriesOnRestaurantsUpdateWithoutCategoryInputSchema';
import { CategoriesOnRestaurantsUncheckedUpdateWithoutCategoryInputSchema } from './CategoriesOnRestaurantsUncheckedUpdateWithoutCategoryInputSchema';

export const CategoriesOnRestaurantsUpdateWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.CategoriesOnRestaurantsUpdateWithWhereUniqueWithoutCategoryInput> = z.object({
  where: z.lazy(() => CategoriesOnRestaurantsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CategoriesOnRestaurantsUpdateWithoutCategoryInputSchema),z.lazy(() => CategoriesOnRestaurantsUncheckedUpdateWithoutCategoryInputSchema) ]),
}).strict();

export default CategoriesOnRestaurantsUpdateWithWhereUniqueWithoutCategoryInputSchema;
