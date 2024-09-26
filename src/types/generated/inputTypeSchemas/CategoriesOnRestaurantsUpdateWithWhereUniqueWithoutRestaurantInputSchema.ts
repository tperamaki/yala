import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoriesOnRestaurantsWhereUniqueInputSchema } from './CategoriesOnRestaurantsWhereUniqueInputSchema';
import { CategoriesOnRestaurantsUpdateWithoutRestaurantInputSchema } from './CategoriesOnRestaurantsUpdateWithoutRestaurantInputSchema';
import { CategoriesOnRestaurantsUncheckedUpdateWithoutRestaurantInputSchema } from './CategoriesOnRestaurantsUncheckedUpdateWithoutRestaurantInputSchema';

export const CategoriesOnRestaurantsUpdateWithWhereUniqueWithoutRestaurantInputSchema: z.ZodType<Prisma.CategoriesOnRestaurantsUpdateWithWhereUniqueWithoutRestaurantInput> =
  z
    .object({
      where: z.lazy(() => CategoriesOnRestaurantsWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => CategoriesOnRestaurantsUpdateWithoutRestaurantInputSchema),
        z.lazy(
          () =>
            CategoriesOnRestaurantsUncheckedUpdateWithoutRestaurantInputSchema,
        ),
      ]),
    })
    .strict();

export default CategoriesOnRestaurantsUpdateWithWhereUniqueWithoutRestaurantInputSchema;
