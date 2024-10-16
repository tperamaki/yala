import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ThumbsignalCreateManyInputSchema: z.ZodType<Prisma.ThumbsignalCreateManyInput> = z.object({
  reviewedRestaurantId: z.number().int(),
  reviewCreatedBy: z.string(),
  signalVariant: z.string(),
  createdAt: z.coerce.date().optional(),
  createdBy: z.string()
}).strict();

export default ThumbsignalCreateManyInputSchema;
