import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ThumbsignalMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ThumbsignalMaxOrderByAggregateInput> = z.object({
  reviewedRestaurantId: z.lazy(() => SortOrderSchema).optional(),
  reviewCreatedBy: z.lazy(() => SortOrderSchema).optional(),
  signalVariant: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ThumbsignalMaxOrderByAggregateInputSchema;
