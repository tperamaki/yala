import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ReviewMinOrderByAggregateInputSchema: z.ZodType<Prisma.ReviewMinOrderByAggregateInput> =
  z
    .object({
      restaurantId: z.lazy(() => SortOrderSchema).optional(),
      rating: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      createdBy: z.lazy(() => SortOrderSchema).optional(),
      comment: z.lazy(() => SortOrderSchema).optional(),
      imageId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default ReviewMinOrderByAggregateInputSchema;
