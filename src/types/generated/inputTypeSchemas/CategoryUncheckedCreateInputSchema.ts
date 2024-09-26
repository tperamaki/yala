import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoriesOnRestaurantsUncheckedCreateNestedManyWithoutCategoryInputSchema } from './CategoriesOnRestaurantsUncheckedCreateNestedManyWithoutCategoryInputSchema';

export const CategoryUncheckedCreateInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateInput> =
  z
    .object({
      id: z.number().int().optional(),
      name: z.string(),
      createdAt: z.coerce.date().optional(),
      createdBy: z.string().optional().nullable(),
      restaurants: z
        .lazy(
          () =>
            CategoriesOnRestaurantsUncheckedCreateNestedManyWithoutCategoryInputSchema,
        )
        .optional(),
    })
    .strict();

export default CategoryUncheckedCreateInputSchema;
