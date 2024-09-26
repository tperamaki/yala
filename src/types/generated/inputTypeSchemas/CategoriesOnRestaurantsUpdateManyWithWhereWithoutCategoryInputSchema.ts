import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoriesOnRestaurantsScalarWhereInputSchema } from './CategoriesOnRestaurantsScalarWhereInputSchema';
import { CategoriesOnRestaurantsUpdateManyMutationInputSchema } from './CategoriesOnRestaurantsUpdateManyMutationInputSchema';
import { CategoriesOnRestaurantsUncheckedUpdateManyWithoutCategoryInputSchema } from './CategoriesOnRestaurantsUncheckedUpdateManyWithoutCategoryInputSchema';

export const CategoriesOnRestaurantsUpdateManyWithWhereWithoutCategoryInputSchema: z.ZodType<Prisma.CategoriesOnRestaurantsUpdateManyWithWhereWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => CategoriesOnRestaurantsScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => CategoriesOnRestaurantsUpdateManyMutationInputSchema),
        z.lazy(
          () =>
            CategoriesOnRestaurantsUncheckedUpdateManyWithoutCategoryInputSchema,
        ),
      ]),
    })
    .strict();

export default CategoriesOnRestaurantsUpdateManyWithWhereWithoutCategoryInputSchema;
