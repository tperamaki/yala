import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CategoriesOnRestaurantsCreateManyCategoryInputSchema: z.ZodType<Prisma.CategoriesOnRestaurantsCreateManyCategoryInput> =
  z
    .object({
      restaurantId: z.number().int(),
      assignedAt: z.coerce.date().optional(),
      assignedBy: z.string().optional().nullable(),
    })
    .strict();

export default CategoriesOnRestaurantsCreateManyCategoryInputSchema;
