import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewCreateWithoutRestaurantInputSchema } from './ReviewCreateWithoutRestaurantInputSchema';
import { ReviewUncheckedCreateWithoutRestaurantInputSchema } from './ReviewUncheckedCreateWithoutRestaurantInputSchema';
import { ReviewCreateOrConnectWithoutRestaurantInputSchema } from './ReviewCreateOrConnectWithoutRestaurantInputSchema';
import { ReviewCreateManyRestaurantInputEnvelopeSchema } from './ReviewCreateManyRestaurantInputEnvelopeSchema';
import { ReviewWhereUniqueInputSchema } from './ReviewWhereUniqueInputSchema';

export const ReviewUncheckedCreateNestedManyWithoutRestaurantInputSchema: z.ZodType<Prisma.ReviewUncheckedCreateNestedManyWithoutRestaurantInput> =
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
      createMany: z
        .lazy(() => ReviewCreateManyRestaurantInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ReviewWhereUniqueInputSchema),
          z.lazy(() => ReviewWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export default ReviewUncheckedCreateNestedManyWithoutRestaurantInputSchema;
