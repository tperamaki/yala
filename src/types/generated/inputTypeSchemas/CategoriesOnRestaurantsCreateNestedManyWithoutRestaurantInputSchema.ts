import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoriesOnRestaurantsCreateWithoutRestaurantInputSchema } from './CategoriesOnRestaurantsCreateWithoutRestaurantInputSchema';
import { CategoriesOnRestaurantsUncheckedCreateWithoutRestaurantInputSchema } from './CategoriesOnRestaurantsUncheckedCreateWithoutRestaurantInputSchema';
import { CategoriesOnRestaurantsCreateOrConnectWithoutRestaurantInputSchema } from './CategoriesOnRestaurantsCreateOrConnectWithoutRestaurantInputSchema';
import { CategoriesOnRestaurantsCreateManyRestaurantInputEnvelopeSchema } from './CategoriesOnRestaurantsCreateManyRestaurantInputEnvelopeSchema';
import { CategoriesOnRestaurantsWhereUniqueInputSchema } from './CategoriesOnRestaurantsWhereUniqueInputSchema';

export const CategoriesOnRestaurantsCreateNestedManyWithoutRestaurantInputSchema: z.ZodType<Prisma.CategoriesOnRestaurantsCreateNestedManyWithoutRestaurantInput> =
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
      createMany: z
        .lazy(
          () => CategoriesOnRestaurantsCreateManyRestaurantInputEnvelopeSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => CategoriesOnRestaurantsWhereUniqueInputSchema),
          z.lazy(() => CategoriesOnRestaurantsWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export default CategoriesOnRestaurantsCreateNestedManyWithoutRestaurantInputSchema;
