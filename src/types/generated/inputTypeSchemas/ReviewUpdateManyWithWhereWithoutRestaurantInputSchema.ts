import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewScalarWhereInputSchema } from './ReviewScalarWhereInputSchema';
import { ReviewUpdateManyMutationInputSchema } from './ReviewUpdateManyMutationInputSchema';
import { ReviewUncheckedUpdateManyWithoutRestaurantInputSchema } from './ReviewUncheckedUpdateManyWithoutRestaurantInputSchema';

export const ReviewUpdateManyWithWhereWithoutRestaurantInputSchema: z.ZodType<Prisma.ReviewUpdateManyWithWhereWithoutRestaurantInput> =
  z
    .object({
      where: z.lazy(() => ReviewScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => ReviewUpdateManyMutationInputSchema),
        z.lazy(() => ReviewUncheckedUpdateManyWithoutRestaurantInputSchema),
      ]),
    })
    .strict();

export default ReviewUpdateManyWithWhereWithoutRestaurantInputSchema;
