import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RestaurantUpdateWithoutCategoriesInputSchema } from './RestaurantUpdateWithoutCategoriesInputSchema';
import { RestaurantUncheckedUpdateWithoutCategoriesInputSchema } from './RestaurantUncheckedUpdateWithoutCategoriesInputSchema';
import { RestaurantCreateWithoutCategoriesInputSchema } from './RestaurantCreateWithoutCategoriesInputSchema';
import { RestaurantUncheckedCreateWithoutCategoriesInputSchema } from './RestaurantUncheckedCreateWithoutCategoriesInputSchema';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';

export const RestaurantUpsertWithoutCategoriesInputSchema: z.ZodType<Prisma.RestaurantUpsertWithoutCategoriesInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => RestaurantUpdateWithoutCategoriesInputSchema),
        z.lazy(() => RestaurantUncheckedUpdateWithoutCategoriesInputSchema),
      ]),
      create: z.union([
        z.lazy(() => RestaurantCreateWithoutCategoriesInputSchema),
        z.lazy(() => RestaurantUncheckedCreateWithoutCategoriesInputSchema),
      ]),
      where: z.lazy(() => RestaurantWhereInputSchema).optional(),
    })
    .strict();

export default RestaurantUpsertWithoutCategoriesInputSchema;
