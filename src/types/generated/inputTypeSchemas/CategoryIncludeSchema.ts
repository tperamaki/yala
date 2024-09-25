import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoriesOnRestaurantsFindManyArgsSchema } from '../outputTypeSchemas/CategoriesOnRestaurantsFindManyArgsSchema';
import { CategoryCountOutputTypeArgsSchema } from '../outputTypeSchemas/CategoryCountOutputTypeArgsSchema';

export const CategoryIncludeSchema: z.ZodType<Prisma.CategoryInclude> = z
  .object({
    restaurants: z
      .union([
        z.boolean(),
        z.lazy(() => CategoriesOnRestaurantsFindManyArgsSchema),
      ])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => CategoryCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

export default CategoryIncludeSchema;
