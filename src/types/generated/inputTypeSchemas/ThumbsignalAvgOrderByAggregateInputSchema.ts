import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ThumbsignalAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ThumbsignalAvgOrderByAggregateInput> = z.object({
  reviewedRestaurantId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ThumbsignalAvgOrderByAggregateInputSchema;
