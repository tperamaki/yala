import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ThumbsignalUncheckedCreateInputSchema: z.ZodType<Prisma.ThumbsignalUncheckedCreateInput> = z.object({
  reviewedRestaurantId: z.number().int(),
  reviewCreatedBy: z.string(),
  signalVariant: z.string(),
  createdAt: z.coerce.date().optional(),
  createdBy: z.string()
}).strict();

export default ThumbsignalUncheckedCreateInputSchema;
