import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ReviewOrderByWithRelationInputSchema } from './ReviewOrderByWithRelationInputSchema';

export const ThumbsignalOrderByWithRelationInputSchema: z.ZodType<Prisma.ThumbsignalOrderByWithRelationInput> = z.object({
  reviewedRestaurantId: z.lazy(() => SortOrderSchema).optional(),
  reviewCreatedBy: z.lazy(() => SortOrderSchema).optional(),
  signalVariant: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.lazy(() => SortOrderSchema).optional(),
  review: z.lazy(() => ReviewOrderByWithRelationInputSchema).optional()
}).strict();

export default ThumbsignalOrderByWithRelationInputSchema;
