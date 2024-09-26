import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RestaurantCreateNestedOneWithoutCategoriesInputSchema } from './RestaurantCreateNestedOneWithoutCategoriesInputSchema';

export const CategoriesOnRestaurantsCreateWithoutCategoryInputSchema: z.ZodType<Prisma.CategoriesOnRestaurantsCreateWithoutCategoryInput> =
  z
    .object({
      assignedAt: z.coerce.date().optional(),
      assignedBy: z.string().optional().nullable(),
      restaurant: z.lazy(
        () => RestaurantCreateNestedOneWithoutCategoriesInputSchema,
      ),
    })
    .strict();

export default CategoriesOnRestaurantsCreateWithoutCategoryInputSchema;
