import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CategoriesOnRestaurantsCategoryIdRestaurantIdCompoundUniqueInputSchema: z.ZodType<Prisma.CategoriesOnRestaurantsCategoryIdRestaurantIdCompoundUniqueInput> = z.object({
  categoryId: z.number(),
  restaurantId: z.number()
}).strict();

export default CategoriesOnRestaurantsCategoryIdRestaurantIdCompoundUniqueInputSchema;
