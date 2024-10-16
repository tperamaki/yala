import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ThumbsignalUncheckedCreateNestedManyWithoutReviewInputSchema } from './ThumbsignalUncheckedCreateNestedManyWithoutReviewInputSchema';

export const ReviewUncheckedCreateWithoutRestaurantInputSchema: z.ZodType<Prisma.ReviewUncheckedCreateWithoutRestaurantInput> = z.object({
  rating: z.number().int(),
  createdAt: z.coerce.date().optional(),
  createdBy: z.string(),
  comment: z.string().optional(),
  imageId: z.string().optional(),
  thumbsignals: z.lazy(() => ThumbsignalUncheckedCreateNestedManyWithoutReviewInputSchema).optional()
}).strict();

export default ReviewUncheckedCreateWithoutRestaurantInputSchema;
