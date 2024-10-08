import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CategoriesOnRestaurantsUncheckedCreateInputSchema: z.ZodType<Prisma.CategoriesOnRestaurantsUncheckedCreateInput> = z.object({
  categoryId: z.number().int(),
  restaurantId: z.number().int(),
  assignedAt: z.coerce.date().optional(),
  assignedBy: z.string().optional().nullable()
}).strict();

export default CategoriesOnRestaurantsUncheckedCreateInputSchema;
