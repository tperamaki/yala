import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ThumbsignalCreateWithoutReviewInputSchema: z.ZodType<Prisma.ThumbsignalCreateWithoutReviewInput> = z.object({
  signalVariant: z.string(),
  createdAt: z.coerce.date().optional(),
  createdBy: z.string()
}).strict();

export default ThumbsignalCreateWithoutReviewInputSchema;
