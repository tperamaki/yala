import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';
import { RestaurantCreateWithoutCategoriesInputSchema } from './RestaurantCreateWithoutCategoriesInputSchema';
import { RestaurantUncheckedCreateWithoutCategoriesInputSchema } from './RestaurantUncheckedCreateWithoutCategoriesInputSchema';

export const RestaurantCreateOrConnectWithoutCategoriesInputSchema: z.ZodType<Prisma.RestaurantCreateOrConnectWithoutCategoriesInput> =
  z
    .object({
      where: z.lazy(() => RestaurantWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => RestaurantCreateWithoutCategoriesInputSchema),
        z.lazy(() => RestaurantUncheckedCreateWithoutCategoriesInputSchema),
      ]),
    })
    .strict();

export default RestaurantCreateOrConnectWithoutCategoriesInputSchema;
