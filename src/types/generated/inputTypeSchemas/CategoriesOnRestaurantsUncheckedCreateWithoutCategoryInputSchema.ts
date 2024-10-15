import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CategoriesOnRestaurantsUncheckedCreateWithoutCategoryInputSchema: z.ZodType<Prisma.CategoriesOnRestaurantsUncheckedCreateWithoutCategoryInput> = z.object({
  restaurantId: z.number().int(),
  assignedAt: z.coerce.date().optional(),
  assignedBy: z.string().optional().nullable()
}).strict();

export default CategoriesOnRestaurantsUncheckedCreateWithoutCategoryInputSchema;
