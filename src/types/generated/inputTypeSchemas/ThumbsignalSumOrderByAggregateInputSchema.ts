import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ThumbsignalSumOrderByAggregateInputSchema: z.ZodType<Prisma.ThumbsignalSumOrderByAggregateInput> = z.object({
  reviewedRestaurantId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ThumbsignalSumOrderByAggregateInputSchema;
