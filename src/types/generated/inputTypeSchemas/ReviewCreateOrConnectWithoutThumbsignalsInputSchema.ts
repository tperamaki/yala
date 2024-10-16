import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewWhereUniqueInputSchema } from './ReviewWhereUniqueInputSchema';
import { ReviewCreateWithoutThumbsignalsInputSchema } from './ReviewCreateWithoutThumbsignalsInputSchema';
import { ReviewUncheckedCreateWithoutThumbsignalsInputSchema } from './ReviewUncheckedCreateWithoutThumbsignalsInputSchema';

export const ReviewCreateOrConnectWithoutThumbsignalsInputSchema: z.ZodType<Prisma.ReviewCreateOrConnectWithoutThumbsignalsInput> = z.object({
  where: z.lazy(() => ReviewWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ReviewCreateWithoutThumbsignalsInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutThumbsignalsInputSchema) ]),
}).strict();

export default ReviewCreateOrConnectWithoutThumbsignalsInputSchema;
