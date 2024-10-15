import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoriesOnRestaurantsCreateNestedManyWithoutCategoryInputSchema } from './CategoriesOnRestaurantsCreateNestedManyWithoutCategoryInputSchema';

export const CategoryCreateInputSchema: z.ZodType<Prisma.CategoryCreateInput> = z.object({
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  createdBy: z.string().optional().nullable(),
  restaurants: z.lazy(() => CategoriesOnRestaurantsCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict();

export default CategoryCreateInputSchema;
