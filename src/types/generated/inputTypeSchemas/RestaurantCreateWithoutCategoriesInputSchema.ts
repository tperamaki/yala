import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewCreateNestedManyWithoutRestaurantInputSchema } from './ReviewCreateNestedManyWithoutRestaurantInputSchema';

export const RestaurantCreateWithoutCategoriesInputSchema: z.ZodType<Prisma.RestaurantCreateWithoutCategoriesInput> = z.object({
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  createdBy: z.string(),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutRestaurantInputSchema).optional()
}).strict();

export default RestaurantCreateWithoutCategoriesInputSchema;
