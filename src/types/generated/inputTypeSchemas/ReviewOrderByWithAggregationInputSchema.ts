import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ReviewCountOrderByAggregateInputSchema } from './ReviewCountOrderByAggregateInputSchema';
import { ReviewAvgOrderByAggregateInputSchema } from './ReviewAvgOrderByAggregateInputSchema';
import { ReviewMaxOrderByAggregateInputSchema } from './ReviewMaxOrderByAggregateInputSchema';
import { ReviewMinOrderByAggregateInputSchema } from './ReviewMinOrderByAggregateInputSchema';
import { ReviewSumOrderByAggregateInputSchema } from './ReviewSumOrderByAggregateInputSchema';

export const ReviewOrderByWithAggregationInputSchema: z.ZodType<Prisma.ReviewOrderByWithAggregationInput> =
  z
    .object({
      restaurantId: z.lazy(() => SortOrderSchema).optional(),
      rating: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      createdBy: z.lazy(() => SortOrderSchema).optional(),
      comment: z.lazy(() => SortOrderSchema).optional(),
      imageId: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => ReviewCountOrderByAggregateInputSchema).optional(),
      _avg: z.lazy(() => ReviewAvgOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => ReviewMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => ReviewMinOrderByAggregateInputSchema).optional(),
      _sum: z.lazy(() => ReviewSumOrderByAggregateInputSchema).optional(),
    })
    .strict();

export default ReviewOrderByWithAggregationInputSchema;
