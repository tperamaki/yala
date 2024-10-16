import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ThumbsignalUncheckedCreateWithoutReviewInputSchema: z.ZodType<Prisma.ThumbsignalUncheckedCreateWithoutReviewInput> = z.object({
  signalVariant: z.string(),
  createdAt: z.coerce.date().optional(),
  createdBy: z.string()
}).strict();

export default ThumbsignalUncheckedCreateWithoutReviewInputSchema;
