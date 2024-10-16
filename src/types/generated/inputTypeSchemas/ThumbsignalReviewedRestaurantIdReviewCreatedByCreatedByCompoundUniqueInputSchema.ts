import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ThumbsignalReviewedRestaurantIdReviewCreatedByCreatedByCompoundUniqueInputSchema: z.ZodType<Prisma.ThumbsignalReviewedRestaurantIdReviewCreatedByCreatedByCompoundUniqueInput> = z.object({
  reviewedRestaurantId: z.number(),
  reviewCreatedBy: z.string(),
  createdBy: z.string()
}).strict();

export default ThumbsignalReviewedRestaurantIdReviewCreatedByCreatedByCompoundUniqueInputSchema;
