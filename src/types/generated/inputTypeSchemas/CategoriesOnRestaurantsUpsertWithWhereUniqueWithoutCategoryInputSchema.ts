import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoriesOnRestaurantsWhereUniqueInputSchema } from './CategoriesOnRestaurantsWhereUniqueInputSchema';
import { CategoriesOnRestaurantsUpdateWithoutCategoryInputSchema } from './CategoriesOnRestaurantsUpdateWithoutCategoryInputSchema';
import { CategoriesOnRestaurantsUncheckedUpdateWithoutCategoryInputSchema } from './CategoriesOnRestaurantsUncheckedUpdateWithoutCategoryInputSchema';
import { CategoriesOnRestaurantsCreateWithoutCategoryInputSchema } from './CategoriesOnRestaurantsCreateWithoutCategoryInputSchema';
import { CategoriesOnRestaurantsUncheckedCreateWithoutCategoryInputSchema } from './CategoriesOnRestaurantsUncheckedCreateWithoutCategoryInputSchema';

export const CategoriesOnRestaurantsUpsertWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.CategoriesOnRestaurantsUpsertWithWhereUniqueWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => CategoriesOnRestaurantsWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => CategoriesOnRestaurantsUpdateWithoutCategoryInputSchema),
        z.lazy(
          () =>
            CategoriesOnRestaurantsUncheckedUpdateWithoutCategoryInputSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => CategoriesOnRestaurantsCreateWithoutCategoryInputSchema),
        z.lazy(
          () =>
            CategoriesOnRestaurantsUncheckedCreateWithoutCategoryInputSchema,
        ),
      ]),
    })
    .strict();

export default CategoriesOnRestaurantsUpsertWithWhereUniqueWithoutCategoryInputSchema;
