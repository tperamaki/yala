import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoriesOnRestaurantsWhereUniqueInputSchema } from './CategoriesOnRestaurantsWhereUniqueInputSchema';
import { CategoriesOnRestaurantsCreateWithoutRestaurantInputSchema } from './CategoriesOnRestaurantsCreateWithoutRestaurantInputSchema';
import { CategoriesOnRestaurantsUncheckedCreateWithoutRestaurantInputSchema } from './CategoriesOnRestaurantsUncheckedCreateWithoutRestaurantInputSchema';

export const CategoriesOnRestaurantsCreateOrConnectWithoutRestaurantInputSchema: z.ZodType<Prisma.CategoriesOnRestaurantsCreateOrConnectWithoutRestaurantInput> =
  z
    .object({
      where: z.lazy(() => CategoriesOnRestaurantsWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => CategoriesOnRestaurantsCreateWithoutRestaurantInputSchema),
        z.lazy(
          () =>
            CategoriesOnRestaurantsUncheckedCreateWithoutRestaurantInputSchema,
        ),
      ]),
    })
    .strict();

export default CategoriesOnRestaurantsCreateOrConnectWithoutRestaurantInputSchema;
