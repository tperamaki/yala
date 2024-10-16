import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ReviewUncheckedCreateWithoutThumbsignalsInputSchema: z.ZodType<Prisma.ReviewUncheckedCreateWithoutThumbsignalsInput> = z.object({
  restaurantId: z.number().int(),
  rating: z.number().int(),
  createdAt: z.coerce.date().optional(),
  createdBy: z.string(),
  comment: z.string().optional(),
  imageId: z.string().optional()
}).strict();

export default ReviewUncheckedCreateWithoutThumbsignalsInputSchema;
