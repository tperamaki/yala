import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RestaurantCreateWithoutCategoriesInputSchema } from './RestaurantCreateWithoutCategoriesInputSchema';
import { RestaurantUncheckedCreateWithoutCategoriesInputSchema } from './RestaurantUncheckedCreateWithoutCategoriesInputSchema';
import { RestaurantCreateOrConnectWithoutCategoriesInputSchema } from './RestaurantCreateOrConnectWithoutCategoriesInputSchema';
import { RestaurantUpsertWithoutCategoriesInputSchema } from './RestaurantUpsertWithoutCategoriesInputSchema';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';
import { RestaurantUpdateToOneWithWhereWithoutCategoriesInputSchema } from './RestaurantUpdateToOneWithWhereWithoutCategoriesInputSchema';
import { RestaurantUpdateWithoutCategoriesInputSchema } from './RestaurantUpdateWithoutCategoriesInputSchema';
import { RestaurantUncheckedUpdateWithoutCategoriesInputSchema } from './RestaurantUncheckedUpdateWithoutCategoriesInputSchema';

export const RestaurantUpdateOneRequiredWithoutCategoriesNestedInputSchema: z.ZodType<Prisma.RestaurantUpdateOneRequiredWithoutCategoriesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RestaurantCreateWithoutCategoriesInputSchema),
          z.lazy(() => RestaurantUncheckedCreateWithoutCategoriesInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => RestaurantCreateOrConnectWithoutCategoriesInputSchema)
        .optional(),
      upsert: z
        .lazy(() => RestaurantUpsertWithoutCategoriesInputSchema)
        .optional(),
      connect: z.lazy(() => RestaurantWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => RestaurantUpdateToOneWithWhereWithoutCategoriesInputSchema,
          ),
          z.lazy(() => RestaurantUpdateWithoutCategoriesInputSchema),
          z.lazy(() => RestaurantUncheckedUpdateWithoutCategoriesInputSchema),
        ])
        .optional(),
    })
    .strict();

export default RestaurantUpdateOneRequiredWithoutCategoriesNestedInputSchema;
