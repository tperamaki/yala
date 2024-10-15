import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { CategoriesOnRestaurantsCountOrderByAggregateInputSchema } from './CategoriesOnRestaurantsCountOrderByAggregateInputSchema';
import { CategoriesOnRestaurantsAvgOrderByAggregateInputSchema } from './CategoriesOnRestaurantsAvgOrderByAggregateInputSchema';
import { CategoriesOnRestaurantsMaxOrderByAggregateInputSchema } from './CategoriesOnRestaurantsMaxOrderByAggregateInputSchema';
import { CategoriesOnRestaurantsMinOrderByAggregateInputSchema } from './CategoriesOnRestaurantsMinOrderByAggregateInputSchema';
import { CategoriesOnRestaurantsSumOrderByAggregateInputSchema } from './CategoriesOnRestaurantsSumOrderByAggregateInputSchema';

export const CategoriesOnRestaurantsOrderByWithAggregationInputSchema: z.ZodType<Prisma.CategoriesOnRestaurantsOrderByWithAggregationInput> = z.object({
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  restaurantId: z.lazy(() => SortOrderSchema).optional(),
  assignedAt: z.lazy(() => SortOrderSchema).optional(),
  assignedBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => CategoriesOnRestaurantsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CategoriesOnRestaurantsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CategoriesOnRestaurantsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CategoriesOnRestaurantsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CategoriesOnRestaurantsSumOrderByAggregateInputSchema).optional()
}).strict();

export default CategoriesOnRestaurantsOrderByWithAggregationInputSchema;
