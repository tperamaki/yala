import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryCreateNestedOneWithoutRestaurantsInputSchema } from './CategoryCreateNestedOneWithoutRestaurantsInputSchema';

export const CategoriesOnRestaurantsCreateWithoutRestaurantInputSchema: z.ZodType<Prisma.CategoriesOnRestaurantsCreateWithoutRestaurantInput> =
  z
    .object({
      assignedAt: z.coerce.date().optional(),
      assignedBy: z.string().optional().nullable(),
      category: z.lazy(
        () => CategoryCreateNestedOneWithoutRestaurantsInputSchema,
      ),
    })
    .strict();

export default CategoriesOnRestaurantsCreateWithoutRestaurantInputSchema;
