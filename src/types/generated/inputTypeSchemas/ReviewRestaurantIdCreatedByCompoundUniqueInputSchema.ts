import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ReviewRestaurantIdCreatedByCompoundUniqueInputSchema: z.ZodType<Prisma.ReviewRestaurantIdCreatedByCompoundUniqueInput> =
  z
    .object({
      restaurantId: z.number(),
      createdBy: z.string(),
    })
    .strict();

export default ReviewRestaurantIdCreatedByCompoundUniqueInputSchema;
