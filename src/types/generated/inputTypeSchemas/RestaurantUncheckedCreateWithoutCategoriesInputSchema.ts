import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewUncheckedCreateNestedManyWithoutRestaurantInputSchema } from './ReviewUncheckedCreateNestedManyWithoutRestaurantInputSchema';

export const RestaurantUncheckedCreateWithoutCategoriesInputSchema: z.ZodType<Prisma.RestaurantUncheckedCreateWithoutCategoriesInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  createdBy: z.string(),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutRestaurantInputSchema).optional()
}).strict();

export default RestaurantUncheckedCreateWithoutCategoriesInputSchema;
