import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewWhereUniqueInputSchema } from './ReviewWhereUniqueInputSchema';
import { ReviewUpdateWithoutRestaurantInputSchema } from './ReviewUpdateWithoutRestaurantInputSchema';
import { ReviewUncheckedUpdateWithoutRestaurantInputSchema } from './ReviewUncheckedUpdateWithoutRestaurantInputSchema';
import { ReviewCreateWithoutRestaurantInputSchema } from './ReviewCreateWithoutRestaurantInputSchema';
import { ReviewUncheckedCreateWithoutRestaurantInputSchema } from './ReviewUncheckedCreateWithoutRestaurantInputSchema';

export const ReviewUpsertWithWhereUniqueWithoutRestaurantInputSchema: z.ZodType<Prisma.ReviewUpsertWithWhereUniqueWithoutRestaurantInput> =
  z
    .object({
      where: z.lazy(() => ReviewWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => ReviewUpdateWithoutRestaurantInputSchema),
        z.lazy(() => ReviewUncheckedUpdateWithoutRestaurantInputSchema),
      ]),
      create: z.union([
        z.lazy(() => ReviewCreateWithoutRestaurantInputSchema),
        z.lazy(() => ReviewUncheckedCreateWithoutRestaurantInputSchema),
      ]),
    })
    .strict();

export default ReviewUpsertWithWhereUniqueWithoutRestaurantInputSchema;
