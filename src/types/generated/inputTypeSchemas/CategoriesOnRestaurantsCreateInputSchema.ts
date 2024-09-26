import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryCreateNestedOneWithoutRestaurantsInputSchema } from './CategoryCreateNestedOneWithoutRestaurantsInputSchema';
import { RestaurantCreateNestedOneWithoutCategoriesInputSchema } from './RestaurantCreateNestedOneWithoutCategoriesInputSchema';

export const CategoriesOnRestaurantsCreateInputSchema: z.ZodType<Prisma.CategoriesOnRestaurantsCreateInput> =
  z
    .object({
      assignedAt: z.coerce.date().optional(),
      assignedBy: z.string().optional().nullable(),
      category: z.lazy(
        () => CategoryCreateNestedOneWithoutRestaurantsInputSchema,
      ),
      restaurant: z.lazy(
        () => RestaurantCreateNestedOneWithoutCategoriesInputSchema,
      ),
    })
    .strict();

export default CategoriesOnRestaurantsCreateInputSchema;
