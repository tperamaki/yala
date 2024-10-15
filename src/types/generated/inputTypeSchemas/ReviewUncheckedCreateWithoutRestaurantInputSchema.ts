import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ReviewUncheckedCreateWithoutRestaurantInputSchema: z.ZodType<Prisma.ReviewUncheckedCreateWithoutRestaurantInput> = z.object({
  rating: z.number().int(),
  createdAt: z.coerce.date().optional(),
  createdBy: z.string(),
  comment: z.string().optional(),
  imageId: z.string().optional()
}).strict();

export default ReviewUncheckedCreateWithoutRestaurantInputSchema;
