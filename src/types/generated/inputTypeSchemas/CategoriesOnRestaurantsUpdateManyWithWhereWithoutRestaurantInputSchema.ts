import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoriesOnRestaurantsScalarWhereInputSchema } from './CategoriesOnRestaurantsScalarWhereInputSchema';
import { CategoriesOnRestaurantsUpdateManyMutationInputSchema } from './CategoriesOnRestaurantsUpdateManyMutationInputSchema';
import { CategoriesOnRestaurantsUncheckedUpdateManyWithoutRestaurantInputSchema } from './CategoriesOnRestaurantsUncheckedUpdateManyWithoutRestaurantInputSchema';

export const CategoriesOnRestaurantsUpdateManyWithWhereWithoutRestaurantInputSchema: z.ZodType<Prisma.CategoriesOnRestaurantsUpdateManyWithWhereWithoutRestaurantInput> =
  z
    .object({
      where: z.lazy(() => CategoriesOnRestaurantsScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => CategoriesOnRestaurantsUpdateManyMutationInputSchema),
        z.lazy(
          () =>
            CategoriesOnRestaurantsUncheckedUpdateManyWithoutRestaurantInputSchema,
        ),
      ]),
    })
    .strict();

export default CategoriesOnRestaurantsUpdateManyWithWhereWithoutRestaurantInputSchema;
