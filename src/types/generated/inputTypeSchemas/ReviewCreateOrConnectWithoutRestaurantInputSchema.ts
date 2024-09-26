import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewWhereUniqueInputSchema } from './ReviewWhereUniqueInputSchema';
import { ReviewCreateWithoutRestaurantInputSchema } from './ReviewCreateWithoutRestaurantInputSchema';
import { ReviewUncheckedCreateWithoutRestaurantInputSchema } from './ReviewUncheckedCreateWithoutRestaurantInputSchema';

export const ReviewCreateOrConnectWithoutRestaurantInputSchema: z.ZodType<Prisma.ReviewCreateOrConnectWithoutRestaurantInput> =
  z
    .object({
      where: z.lazy(() => ReviewWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => ReviewCreateWithoutRestaurantInputSchema),
        z.lazy(() => ReviewUncheckedCreateWithoutRestaurantInputSchema),
      ]),
    })
    .strict();

export default ReviewCreateOrConnectWithoutRestaurantInputSchema;
