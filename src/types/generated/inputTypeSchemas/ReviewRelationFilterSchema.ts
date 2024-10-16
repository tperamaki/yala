import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewWhereInputSchema } from './ReviewWhereInputSchema';

export const ReviewRelationFilterSchema: z.ZodType<Prisma.ReviewRelationFilter> = z.object({
  is: z.lazy(() => ReviewWhereInputSchema).optional(),
  isNot: z.lazy(() => ReviewWhereInputSchema).optional()
}).strict();

export default ReviewRelationFilterSchema;
