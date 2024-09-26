import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CategoriesOnRestaurantsUncheckedCreateWithoutRestaurantInputSchema: z.ZodType<Prisma.CategoriesOnRestaurantsUncheckedCreateWithoutRestaurantInput> =
  z
    .object({
      categoryId: z.number().int(),
      assignedAt: z.coerce.date().optional(),
      assignedBy: z.string().optional().nullable(),
    })
    .strict();

export default CategoriesOnRestaurantsUncheckedCreateWithoutRestaurantInputSchema;
