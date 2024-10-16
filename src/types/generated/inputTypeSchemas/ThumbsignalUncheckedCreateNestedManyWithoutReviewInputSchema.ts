import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ThumbsignalCreateWithoutReviewInputSchema } from './ThumbsignalCreateWithoutReviewInputSchema';
import { ThumbsignalUncheckedCreateWithoutReviewInputSchema } from './ThumbsignalUncheckedCreateWithoutReviewInputSchema';
import { ThumbsignalCreateOrConnectWithoutReviewInputSchema } from './ThumbsignalCreateOrConnectWithoutReviewInputSchema';
import { ThumbsignalCreateManyReviewInputEnvelopeSchema } from './ThumbsignalCreateManyReviewInputEnvelopeSchema';
import { ThumbsignalWhereUniqueInputSchema } from './ThumbsignalWhereUniqueInputSchema';

export const ThumbsignalUncheckedCreateNestedManyWithoutReviewInputSchema: z.ZodType<Prisma.ThumbsignalUncheckedCreateNestedManyWithoutReviewInput> = z.object({
  create: z.union([ z.lazy(() => ThumbsignalCreateWithoutReviewInputSchema),z.lazy(() => ThumbsignalCreateWithoutReviewInputSchema).array(),z.lazy(() => ThumbsignalUncheckedCreateWithoutReviewInputSchema),z.lazy(() => ThumbsignalUncheckedCreateWithoutReviewInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ThumbsignalCreateOrConnectWithoutReviewInputSchema),z.lazy(() => ThumbsignalCreateOrConnectWithoutReviewInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ThumbsignalCreateManyReviewInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ThumbsignalWhereUniqueInputSchema),z.lazy(() => ThumbsignalWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ThumbsignalUncheckedCreateNestedManyWithoutReviewInputSchema;
