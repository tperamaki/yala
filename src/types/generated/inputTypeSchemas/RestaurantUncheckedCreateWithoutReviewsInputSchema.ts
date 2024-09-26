import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoriesOnRestaurantsUncheckedCreateNestedManyWithoutRestaurantInputSchema } from './CategoriesOnRestaurantsUncheckedCreateNestedManyWithoutRestaurantInputSchema';

export const RestaurantUncheckedCreateWithoutReviewsInputSchema: z.ZodType<Prisma.RestaurantUncheckedCreateWithoutReviewsInput> =
  z
    .object({
      id: z.number().int().optional(),
      name: z.string(),
      createdAt: z.coerce.date().optional(),
      createdBy: z.string(),
      categories: z
        .lazy(
          () =>
            CategoriesOnRestaurantsUncheckedCreateNestedManyWithoutRestaurantInputSchema,
        )
        .optional(),
    })
    .strict();

export default RestaurantUncheckedCreateWithoutReviewsInputSchema;
