import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoriesOnRestaurantsWhereUniqueInputSchema } from './CategoriesOnRestaurantsWhereUniqueInputSchema';
import { CategoriesOnRestaurantsUpdateWithoutRestaurantInputSchema } from './CategoriesOnRestaurantsUpdateWithoutRestaurantInputSchema';
import { CategoriesOnRestaurantsUncheckedUpdateWithoutRestaurantInputSchema } from './CategoriesOnRestaurantsUncheckedUpdateWithoutRestaurantInputSchema';
import { CategoriesOnRestaurantsCreateWithoutRestaurantInputSchema } from './CategoriesOnRestaurantsCreateWithoutRestaurantInputSchema';
import { CategoriesOnRestaurantsUncheckedCreateWithoutRestaurantInputSchema } from './CategoriesOnRestaurantsUncheckedCreateWithoutRestaurantInputSchema';

export const CategoriesOnRestaurantsUpsertWithWhereUniqueWithoutRestaurantInputSchema: z.ZodType<Prisma.CategoriesOnRestaurantsUpsertWithWhereUniqueWithoutRestaurantInput> = z.object({
  where: z.lazy(() => CategoriesOnRestaurantsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CategoriesOnRestaurantsUpdateWithoutRestaurantInputSchema),z.lazy(() => CategoriesOnRestaurantsUncheckedUpdateWithoutRestaurantInputSchema) ]),
  create: z.union([ z.lazy(() => CategoriesOnRestaurantsCreateWithoutRestaurantInputSchema),z.lazy(() => CategoriesOnRestaurantsUncheckedCreateWithoutRestaurantInputSchema) ]),
}).strict();

export default CategoriesOnRestaurantsUpsertWithWhereUniqueWithoutRestaurantInputSchema;
