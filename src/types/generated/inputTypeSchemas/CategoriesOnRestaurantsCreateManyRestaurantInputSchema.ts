import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CategoriesOnRestaurantsCreateManyRestaurantInputSchema: z.ZodType<Prisma.CategoriesOnRestaurantsCreateManyRestaurantInput> = z.object({
  categoryId: z.number().int(),
  assignedAt: z.coerce.date().optional(),
  assignedBy: z.string().optional().nullable()
}).strict();

export default CategoriesOnRestaurantsCreateManyRestaurantInputSchema;
