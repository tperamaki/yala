import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewWhereUniqueInputSchema } from './ReviewWhereUniqueInputSchema';
import { ReviewUpdateWithoutRestaurantInputSchema } from './ReviewUpdateWithoutRestaurantInputSchema';
import { ReviewUncheckedUpdateWithoutRestaurantInputSchema } from './ReviewUncheckedUpdateWithoutRestaurantInputSchema';

export const ReviewUpdateWithWhereUniqueWithoutRestaurantInputSchema: z.ZodType<Prisma.ReviewUpdateWithWhereUniqueWithoutRestaurantInput> =
  z
    .object({
      where: z.lazy(() => ReviewWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => ReviewUpdateWithoutRestaurantInputSchema),
        z.lazy(() => ReviewUncheckedUpdateWithoutRestaurantInputSchema),
      ]),
    })
    .strict();

export default ReviewUpdateWithWhereUniqueWithoutRestaurantInputSchema;
