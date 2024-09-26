import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewCreateWithoutRestaurantInputSchema } from './ReviewCreateWithoutRestaurantInputSchema';
import { ReviewUncheckedCreateWithoutRestaurantInputSchema } from './ReviewUncheckedCreateWithoutRestaurantInputSchema';
import { ReviewCreateOrConnectWithoutRestaurantInputSchema } from './ReviewCreateOrConnectWithoutRestaurantInputSchema';
import { ReviewUpsertWithWhereUniqueWithoutRestaurantInputSchema } from './ReviewUpsertWithWhereUniqueWithoutRestaurantInputSchema';
import { ReviewCreateManyRestaurantInputEnvelopeSchema } from './ReviewCreateManyRestaurantInputEnvelopeSchema';
import { ReviewWhereUniqueInputSchema } from './ReviewWhereUniqueInputSchema';
import { ReviewUpdateWithWhereUniqueWithoutRestaurantInputSchema } from './ReviewUpdateWithWhereUniqueWithoutRestaurantInputSchema';
import { ReviewUpdateManyWithWhereWithoutRestaurantInputSchema } from './ReviewUpdateManyWithWhereWithoutRestaurantInputSchema';
import { ReviewScalarWhereInputSchema } from './ReviewScalarWhereInputSchema';

export const ReviewUpdateManyWithoutRestaurantNestedInputSchema: z.ZodType<Prisma.ReviewUpdateManyWithoutRestaurantNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ReviewCreateWithoutRestaurantInputSchema),
          z.lazy(() => ReviewCreateWithoutRestaurantInputSchema).array(),
          z.lazy(() => ReviewUncheckedCreateWithoutRestaurantInputSchema),
          z
            .lazy(() => ReviewUncheckedCreateWithoutRestaurantInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ReviewCreateOrConnectWithoutRestaurantInputSchema),
          z
            .lazy(() => ReviewCreateOrConnectWithoutRestaurantInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => ReviewUpsertWithWhereUniqueWithoutRestaurantInputSchema),
          z
            .lazy(() => ReviewUpsertWithWhereUniqueWithoutRestaurantInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ReviewCreateManyRestaurantInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ReviewWhereUniqueInputSchema),
          z.lazy(() => ReviewWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ReviewWhereUniqueInputSchema),
          z.lazy(() => ReviewWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ReviewWhereUniqueInputSchema),
          z.lazy(() => ReviewWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ReviewWhereUniqueInputSchema),
          z.lazy(() => ReviewWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => ReviewUpdateWithWhereUniqueWithoutRestaurantInputSchema),
          z
            .lazy(() => ReviewUpdateWithWhereUniqueWithoutRestaurantInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => ReviewUpdateManyWithWhereWithoutRestaurantInputSchema),
          z
            .lazy(() => ReviewUpdateManyWithWhereWithoutRestaurantInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ReviewScalarWhereInputSchema),
          z.lazy(() => ReviewScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export default ReviewUpdateManyWithoutRestaurantNestedInputSchema;
