import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewCreateWithoutThumbsignalsInputSchema } from './ReviewCreateWithoutThumbsignalsInputSchema';
import { ReviewUncheckedCreateWithoutThumbsignalsInputSchema } from './ReviewUncheckedCreateWithoutThumbsignalsInputSchema';
import { ReviewCreateOrConnectWithoutThumbsignalsInputSchema } from './ReviewCreateOrConnectWithoutThumbsignalsInputSchema';
import { ReviewUpsertWithoutThumbsignalsInputSchema } from './ReviewUpsertWithoutThumbsignalsInputSchema';
import { ReviewWhereUniqueInputSchema } from './ReviewWhereUniqueInputSchema';
import { ReviewUpdateToOneWithWhereWithoutThumbsignalsInputSchema } from './ReviewUpdateToOneWithWhereWithoutThumbsignalsInputSchema';
import { ReviewUpdateWithoutThumbsignalsInputSchema } from './ReviewUpdateWithoutThumbsignalsInputSchema';
import { ReviewUncheckedUpdateWithoutThumbsignalsInputSchema } from './ReviewUncheckedUpdateWithoutThumbsignalsInputSchema';

export const ReviewUpdateOneRequiredWithoutThumbsignalsNestedInputSchema: z.ZodType<Prisma.ReviewUpdateOneRequiredWithoutThumbsignalsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReviewCreateWithoutThumbsignalsInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutThumbsignalsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ReviewCreateOrConnectWithoutThumbsignalsInputSchema).optional(),
  upsert: z.lazy(() => ReviewUpsertWithoutThumbsignalsInputSchema).optional(),
  connect: z.lazy(() => ReviewWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ReviewUpdateToOneWithWhereWithoutThumbsignalsInputSchema),z.lazy(() => ReviewUpdateWithoutThumbsignalsInputSchema),z.lazy(() => ReviewUncheckedUpdateWithoutThumbsignalsInputSchema) ]).optional(),
}).strict();

export default ReviewUpdateOneRequiredWithoutThumbsignalsNestedInputSchema;
