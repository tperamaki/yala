import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ThumbsignalWhereUniqueInputSchema } from './ThumbsignalWhereUniqueInputSchema';
import { ThumbsignalUpdateWithoutReviewInputSchema } from './ThumbsignalUpdateWithoutReviewInputSchema';
import { ThumbsignalUncheckedUpdateWithoutReviewInputSchema } from './ThumbsignalUncheckedUpdateWithoutReviewInputSchema';
import { ThumbsignalCreateWithoutReviewInputSchema } from './ThumbsignalCreateWithoutReviewInputSchema';
import { ThumbsignalUncheckedCreateWithoutReviewInputSchema } from './ThumbsignalUncheckedCreateWithoutReviewInputSchema';

export const ThumbsignalUpsertWithWhereUniqueWithoutReviewInputSchema: z.ZodType<Prisma.ThumbsignalUpsertWithWhereUniqueWithoutReviewInput> = z.object({
  where: z.lazy(() => ThumbsignalWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ThumbsignalUpdateWithoutReviewInputSchema),z.lazy(() => ThumbsignalUncheckedUpdateWithoutReviewInputSchema) ]),
  create: z.union([ z.lazy(() => ThumbsignalCreateWithoutReviewInputSchema),z.lazy(() => ThumbsignalUncheckedCreateWithoutReviewInputSchema) ]),
}).strict();

export default ThumbsignalUpsertWithWhereUniqueWithoutReviewInputSchema;
