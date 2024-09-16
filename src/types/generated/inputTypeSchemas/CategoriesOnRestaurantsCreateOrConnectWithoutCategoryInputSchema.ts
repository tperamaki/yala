import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoriesOnRestaurantsWhereUniqueInputSchema } from './CategoriesOnRestaurantsWhereUniqueInputSchema';
import { CategoriesOnRestaurantsCreateWithoutCategoryInputSchema } from './CategoriesOnRestaurantsCreateWithoutCategoryInputSchema';
import { CategoriesOnRestaurantsUncheckedCreateWithoutCategoryInputSchema } from './CategoriesOnRestaurantsUncheckedCreateWithoutCategoryInputSchema';

export const CategoriesOnRestaurantsCreateOrConnectWithoutCategoryInputSchema: z.ZodType<Prisma.CategoriesOnRestaurantsCreateOrConnectWithoutCategoryInput> = z.object({
  where: z.lazy(() => CategoriesOnRestaurantsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CategoriesOnRestaurantsCreateWithoutCategoryInputSchema),z.lazy(() => CategoriesOnRestaurantsUncheckedCreateWithoutCategoryInputSchema) ]),
}).strict();

export default CategoriesOnRestaurantsCreateOrConnectWithoutCategoryInputSchema;
