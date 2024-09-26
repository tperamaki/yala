import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { CategoryCountOrderByAggregateInputSchema } from './CategoryCountOrderByAggregateInputSchema';
import { CategoryAvgOrderByAggregateInputSchema } from './CategoryAvgOrderByAggregateInputSchema';
import { CategoryMaxOrderByAggregateInputSchema } from './CategoryMaxOrderByAggregateInputSchema';
import { CategoryMinOrderByAggregateInputSchema } from './CategoryMinOrderByAggregateInputSchema';
import { CategorySumOrderByAggregateInputSchema } from './CategorySumOrderByAggregateInputSchema';

export const CategoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.CategoryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => CategoryCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CategoryAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CategoryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CategoryMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CategorySumOrderByAggregateInputSchema).optional()
}).strict();

export default CategoryOrderByWithAggregationInputSchema;
