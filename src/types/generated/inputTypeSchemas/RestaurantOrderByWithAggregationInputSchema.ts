import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { RestaurantCountOrderByAggregateInputSchema } from './RestaurantCountOrderByAggregateInputSchema';
import { RestaurantAvgOrderByAggregateInputSchema } from './RestaurantAvgOrderByAggregateInputSchema';
import { RestaurantMaxOrderByAggregateInputSchema } from './RestaurantMaxOrderByAggregateInputSchema';
import { RestaurantMinOrderByAggregateInputSchema } from './RestaurantMinOrderByAggregateInputSchema';
import { RestaurantSumOrderByAggregateInputSchema } from './RestaurantSumOrderByAggregateInputSchema';

export const RestaurantOrderByWithAggregationInputSchema: z.ZodType<Prisma.RestaurantOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      createdBy: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => RestaurantCountOrderByAggregateInputSchema)
        .optional(),
      _avg: z.lazy(() => RestaurantAvgOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => RestaurantMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => RestaurantMinOrderByAggregateInputSchema).optional(),
      _sum: z.lazy(() => RestaurantSumOrderByAggregateInputSchema).optional(),
    })
    .strict();

export default RestaurantOrderByWithAggregationInputSchema;
