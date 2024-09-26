import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CategoriesOnRestaurantsCreateManyInputSchema: z.ZodType<Prisma.CategoriesOnRestaurantsCreateManyInput> =
  z
    .object({
      categoryId: z.number().int(),
      restaurantId: z.number().int(),
      assignedAt: z.coerce.date().optional(),
      assignedBy: z.string().optional().nullable(),
    })
    .strict();

export default CategoriesOnRestaurantsCreateManyInputSchema;
