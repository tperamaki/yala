import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoriesOnRestaurantsCreateNestedManyWithoutRestaurantInputSchema } from './CategoriesOnRestaurantsCreateNestedManyWithoutRestaurantInputSchema';

export const RestaurantCreateWithoutReviewsInputSchema: z.ZodType<Prisma.RestaurantCreateWithoutReviewsInput> = z.object({
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  createdBy: z.string(),
  categories: z.lazy(() => CategoriesOnRestaurantsCreateNestedManyWithoutRestaurantInputSchema).optional()
}).strict();

export default RestaurantCreateWithoutReviewsInputSchema;
