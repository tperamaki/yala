import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ReviewAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ReviewAvgOrderByAggregateInput> =
  z
    .object({
      restaurantId: z.lazy(() => SortOrderSchema).optional(),
      rating: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default ReviewAvgOrderByAggregateInputSchema;
