import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ReviewCreateWithoutRestaurantInputSchema: z.ZodType<Prisma.ReviewCreateWithoutRestaurantInput> = z.object({
  rating: z.number().int(),
  createdAt: z.coerce.date().optional(),
  createdBy: z.string(),
  comment: z.string().optional(),
  imageId: z.string().optional()
}).strict();

export default ReviewCreateWithoutRestaurantInputSchema;
