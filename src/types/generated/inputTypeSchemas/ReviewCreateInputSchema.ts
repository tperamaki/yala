import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RestaurantCreateNestedOneWithoutReviewsInputSchema } from './RestaurantCreateNestedOneWithoutReviewsInputSchema';

export const ReviewCreateInputSchema: z.ZodType<Prisma.ReviewCreateInput> = z
  .object({
    rating: z.number().int(),
    createdAt: z.coerce.date().optional(),
    createdBy: z.string(),
    comment: z.string().optional(),
    imageId: z.string().optional(),
    restaurant: z.lazy(
      () => RestaurantCreateNestedOneWithoutReviewsInputSchema,
    ),
  })
  .strict();

export default ReviewCreateInputSchema;
