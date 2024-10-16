import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ThumbsignalCreateManyReviewInputSchema } from './ThumbsignalCreateManyReviewInputSchema';

export const ThumbsignalCreateManyReviewInputEnvelopeSchema: z.ZodType<Prisma.ThumbsignalCreateManyReviewInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ThumbsignalCreateManyReviewInputSchema),z.lazy(() => ThumbsignalCreateManyReviewInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ThumbsignalCreateManyReviewInputEnvelopeSchema;
