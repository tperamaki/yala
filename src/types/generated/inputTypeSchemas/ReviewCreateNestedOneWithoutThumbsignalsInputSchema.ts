import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewCreateWithoutThumbsignalsInputSchema } from './ReviewCreateWithoutThumbsignalsInputSchema';
import { ReviewUncheckedCreateWithoutThumbsignalsInputSchema } from './ReviewUncheckedCreateWithoutThumbsignalsInputSchema';
import { ReviewCreateOrConnectWithoutThumbsignalsInputSchema } from './ReviewCreateOrConnectWithoutThumbsignalsInputSchema';
import { ReviewWhereUniqueInputSchema } from './ReviewWhereUniqueInputSchema';

export const ReviewCreateNestedOneWithoutThumbsignalsInputSchema: z.ZodType<Prisma.ReviewCreateNestedOneWithoutThumbsignalsInput> = z.object({
  create: z.union([ z.lazy(() => ReviewCreateWithoutThumbsignalsInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutThumbsignalsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ReviewCreateOrConnectWithoutThumbsignalsInputSchema).optional(),
  connect: z.lazy(() => ReviewWhereUniqueInputSchema).optional()
}).strict();

export default ReviewCreateNestedOneWithoutThumbsignalsInputSchema;
