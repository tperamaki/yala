import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CategoriesOnRestaurantsMinOrderByAggregateInputSchema: z.ZodType<Prisma.CategoriesOnRestaurantsMinOrderByAggregateInput> =
  z
    .object({
      categoryId: z.lazy(() => SortOrderSchema).optional(),
      restaurantId: z.lazy(() => SortOrderSchema).optional(),
      assignedAt: z.lazy(() => SortOrderSchema).optional(),
      assignedBy: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default CategoriesOnRestaurantsMinOrderByAggregateInputSchema;
