import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoriesOnRestaurantsCreateNestedManyWithoutRestaurantInputSchema } from './CategoriesOnRestaurantsCreateNestedManyWithoutRestaurantInputSchema';
import { ReviewCreateNestedManyWithoutRestaurantInputSchema } from './ReviewCreateNestedManyWithoutRestaurantInputSchema';

export const RestaurantCreateInputSchema: z.ZodType<Prisma.RestaurantCreateInput> = z.object({
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  createdBy: z.string(),
  categories: z.lazy(() => CategoriesOnRestaurantsCreateNestedManyWithoutRestaurantInputSchema).optional(),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutRestaurantInputSchema).optional()
}).strict();

export default RestaurantCreateInputSchema;
