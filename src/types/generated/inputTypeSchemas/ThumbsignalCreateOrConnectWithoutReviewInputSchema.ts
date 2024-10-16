import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ThumbsignalWhereUniqueInputSchema } from './ThumbsignalWhereUniqueInputSchema';
import { ThumbsignalCreateWithoutReviewInputSchema } from './ThumbsignalCreateWithoutReviewInputSchema';
import { ThumbsignalUncheckedCreateWithoutReviewInputSchema } from './ThumbsignalUncheckedCreateWithoutReviewInputSchema';

export const ThumbsignalCreateOrConnectWithoutReviewInputSchema: z.ZodType<Prisma.ThumbsignalCreateOrConnectWithoutReviewInput> = z.object({
  where: z.lazy(() => ThumbsignalWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ThumbsignalCreateWithoutReviewInputSchema),z.lazy(() => ThumbsignalUncheckedCreateWithoutReviewInputSchema) ]),
}).strict();

export default ThumbsignalCreateOrConnectWithoutReviewInputSchema;
