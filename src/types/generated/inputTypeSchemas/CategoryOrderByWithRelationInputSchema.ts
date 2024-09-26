import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { CategoriesOnRestaurantsOrderByRelationAggregateInputSchema } from './CategoriesOnRestaurantsOrderByRelationAggregateInputSchema';

export const CategoryOrderByWithRelationInputSchema: z.ZodType<Prisma.CategoryOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      createdBy: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      restaurants: z
        .lazy(() => CategoriesOnRestaurantsOrderByRelationAggregateInputSchema)
        .optional(),
    })
    .strict();

export default CategoryOrderByWithRelationInputSchema;
