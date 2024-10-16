import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RestaurantCreateNestedOneWithoutReviewsInputSchema } from './RestaurantCreateNestedOneWithoutReviewsInputSchema';

export const ReviewCreateWithoutThumbsignalsInputSchema: z.ZodType<Prisma.ReviewCreateWithoutThumbsignalsInput> = z.object({
  rating: z.number().int(),
  createdAt: z.coerce.date().optional(),
  createdBy: z.string(),
  comment: z.string().optional(),
  imageId: z.string().optional(),
  restaurant: z.lazy(() => RestaurantCreateNestedOneWithoutReviewsInputSchema)
}).strict();

export default ReviewCreateWithoutThumbsignalsInputSchema;
