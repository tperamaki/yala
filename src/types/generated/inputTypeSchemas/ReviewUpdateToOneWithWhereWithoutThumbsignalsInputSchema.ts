import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewWhereInputSchema } from './ReviewWhereInputSchema';
import { ReviewUpdateWithoutThumbsignalsInputSchema } from './ReviewUpdateWithoutThumbsignalsInputSchema';
import { ReviewUncheckedUpdateWithoutThumbsignalsInputSchema } from './ReviewUncheckedUpdateWithoutThumbsignalsInputSchema';

export const ReviewUpdateToOneWithWhereWithoutThumbsignalsInputSchema: z.ZodType<Prisma.ReviewUpdateToOneWithWhereWithoutThumbsignalsInput> = z.object({
  where: z.lazy(() => ReviewWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ReviewUpdateWithoutThumbsignalsInputSchema),z.lazy(() => ReviewUncheckedUpdateWithoutThumbsignalsInputSchema) ]),
}).strict();

export default ReviewUpdateToOneWithWhereWithoutThumbsignalsInputSchema;
