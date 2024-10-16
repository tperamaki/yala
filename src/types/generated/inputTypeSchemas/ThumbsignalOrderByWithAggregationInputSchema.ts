import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ThumbsignalCountOrderByAggregateInputSchema } from './ThumbsignalCountOrderByAggregateInputSchema';
import { ThumbsignalAvgOrderByAggregateInputSchema } from './ThumbsignalAvgOrderByAggregateInputSchema';
import { ThumbsignalMaxOrderByAggregateInputSchema } from './ThumbsignalMaxOrderByAggregateInputSchema';
import { ThumbsignalMinOrderByAggregateInputSchema } from './ThumbsignalMinOrderByAggregateInputSchema';
import { ThumbsignalSumOrderByAggregateInputSchema } from './ThumbsignalSumOrderByAggregateInputSchema';

export const ThumbsignalOrderByWithAggregationInputSchema: z.ZodType<Prisma.ThumbsignalOrderByWithAggregationInput> = z.object({
  reviewedRestaurantId: z.lazy(() => SortOrderSchema).optional(),
  reviewCreatedBy: z.lazy(() => SortOrderSchema).optional(),
  signalVariant: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ThumbsignalCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ThumbsignalAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ThumbsignalMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ThumbsignalMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ThumbsignalSumOrderByAggregateInputSchema).optional()
}).strict();

export default ThumbsignalOrderByWithAggregationInputSchema;
