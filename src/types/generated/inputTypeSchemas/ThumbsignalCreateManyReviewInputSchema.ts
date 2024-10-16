import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ThumbsignalCreateManyReviewInputSchema: z.ZodType<Prisma.ThumbsignalCreateManyReviewInput> = z.object({
  signalVariant: z.string(),
  createdAt: z.coerce.date().optional(),
  createdBy: z.string()
}).strict();

export default ThumbsignalCreateManyReviewInputSchema;
