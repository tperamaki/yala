import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ReviewCreateManyRestaurantInputSchema: z.ZodType<Prisma.ReviewCreateManyRestaurantInput> = z.object({
  rating: z.number().int(),
  createdAt: z.coerce.date().optional(),
  createdBy: z.string(),
  comment: z.string().optional(),
  imageId: z.string().optional()
}).strict();

export default ReviewCreateManyRestaurantInputSchema;
