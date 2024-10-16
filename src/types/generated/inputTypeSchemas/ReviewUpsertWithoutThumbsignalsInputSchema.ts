import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewUpdateWithoutThumbsignalsInputSchema } from './ReviewUpdateWithoutThumbsignalsInputSchema';
import { ReviewUncheckedUpdateWithoutThumbsignalsInputSchema } from './ReviewUncheckedUpdateWithoutThumbsignalsInputSchema';
import { ReviewCreateWithoutThumbsignalsInputSchema } from './ReviewCreateWithoutThumbsignalsInputSchema';
import { ReviewUncheckedCreateWithoutThumbsignalsInputSchema } from './ReviewUncheckedCreateWithoutThumbsignalsInputSchema';
import { ReviewWhereInputSchema } from './ReviewWhereInputSchema';

export const ReviewUpsertWithoutThumbsignalsInputSchema: z.ZodType<Prisma.ReviewUpsertWithoutThumbsignalsInput> = z.object({
  update: z.union([ z.lazy(() => ReviewUpdateWithoutThumbsignalsInputSchema),z.lazy(() => ReviewUncheckedUpdateWithoutThumbsignalsInputSchema) ]),
  create: z.union([ z.lazy(() => ReviewCreateWithoutThumbsignalsInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutThumbsignalsInputSchema) ]),
  where: z.lazy(() => ReviewWhereInputSchema).optional()
}).strict();

export default ReviewUpsertWithoutThumbsignalsInputSchema;
