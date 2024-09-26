import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoriesOnRestaurantsUncheckedCreateNestedManyWithoutRestaurantInputSchema } from './CategoriesOnRestaurantsUncheckedCreateNestedManyWithoutRestaurantInputSchema';
import { ReviewUncheckedCreateNestedManyWithoutRestaurantInputSchema } from './ReviewUncheckedCreateNestedManyWithoutRestaurantInputSchema';

export const RestaurantUncheckedCreateInputSchema: z.ZodType<Prisma.RestaurantUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  createdBy: z.string(),
  categories: z.lazy(() => CategoriesOnRestaurantsUncheckedCreateNestedManyWithoutRestaurantInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutRestaurantInputSchema).optional()
}).strict();

export default RestaurantUncheckedCreateInputSchema;
