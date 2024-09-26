import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoriesOnRestaurantsCreateWithoutRestaurantInputSchema } from './CategoriesOnRestaurantsCreateWithoutRestaurantInputSchema';
import { CategoriesOnRestaurantsUncheckedCreateWithoutRestaurantInputSchema } from './CategoriesOnRestaurantsUncheckedCreateWithoutRestaurantInputSchema';
import { CategoriesOnRestaurantsCreateOrConnectWithoutRestaurantInputSchema } from './CategoriesOnRestaurantsCreateOrConnectWithoutRestaurantInputSchema';
import { CategoriesOnRestaurantsUpsertWithWhereUniqueWithoutRestaurantInputSchema } from './CategoriesOnRestaurantsUpsertWithWhereUniqueWithoutRestaurantInputSchema';
import { CategoriesOnRestaurantsCreateManyRestaurantInputEnvelopeSchema } from './CategoriesOnRestaurantsCreateManyRestaurantInputEnvelopeSchema';
import { CategoriesOnRestaurantsWhereUniqueInputSchema } from './CategoriesOnRestaurantsWhereUniqueInputSchema';
import { CategoriesOnRestaurantsUpdateWithWhereUniqueWithoutRestaurantInputSchema } from './CategoriesOnRestaurantsUpdateWithWhereUniqueWithoutRestaurantInputSchema';
import { CategoriesOnRestaurantsUpdateManyWithWhereWithoutRestaurantInputSchema } from './CategoriesOnRestaurantsUpdateManyWithWhereWithoutRestaurantInputSchema';
import { CategoriesOnRestaurantsScalarWhereInputSchema } from './CategoriesOnRestaurantsScalarWhereInputSchema';

export const CategoriesOnRestaurantsUpdateManyWithoutRestaurantNestedInputSchema: z.ZodType<Prisma.CategoriesOnRestaurantsUpdateManyWithoutRestaurantNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => CategoriesOnRestaurantsCreateWithoutRestaurantInputSchema,
          ),
          z
            .lazy(
              () => CategoriesOnRestaurantsCreateWithoutRestaurantInputSchema,
            )
            .array(),
          z.lazy(
            () =>
              CategoriesOnRestaurantsUncheckedCreateWithoutRestaurantInputSchema,
          ),
          z
            .lazy(
              () =>
                CategoriesOnRestaurantsUncheckedCreateWithoutRestaurantInputSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              CategoriesOnRestaurantsCreateOrConnectWithoutRestaurantInputSchema,
          ),
          z
            .lazy(
              () =>
                CategoriesOnRestaurantsCreateOrConnectWithoutRestaurantInputSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              CategoriesOnRestaurantsUpsertWithWhereUniqueWithoutRestaurantInputSchema,
          ),
          z
            .lazy(
              () =>
                CategoriesOnRestaurantsUpsertWithWhereUniqueWithoutRestaurantInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => CategoriesOnRestaurantsCreateManyRestaurantInputEnvelopeSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => CategoriesOnRestaurantsWhereUniqueInputSchema),
          z.lazy(() => CategoriesOnRestaurantsWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => CategoriesOnRestaurantsWhereUniqueInputSchema),
          z.lazy(() => CategoriesOnRestaurantsWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => CategoriesOnRestaurantsWhereUniqueInputSchema),
          z.lazy(() => CategoriesOnRestaurantsWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => CategoriesOnRestaurantsWhereUniqueInputSchema),
          z.lazy(() => CategoriesOnRestaurantsWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              CategoriesOnRestaurantsUpdateWithWhereUniqueWithoutRestaurantInputSchema,
          ),
          z
            .lazy(
              () =>
                CategoriesOnRestaurantsUpdateWithWhereUniqueWithoutRestaurantInputSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              CategoriesOnRestaurantsUpdateManyWithWhereWithoutRestaurantInputSchema,
          ),
          z
            .lazy(
              () =>
                CategoriesOnRestaurantsUpdateManyWithWhereWithoutRestaurantInputSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => CategoriesOnRestaurantsScalarWhereInputSchema),
          z.lazy(() => CategoriesOnRestaurantsScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export default CategoriesOnRestaurantsUpdateManyWithoutRestaurantNestedInputSchema;
