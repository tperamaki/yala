import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ThumbsignalWhereUniqueInputSchema } from './ThumbsignalWhereUniqueInputSchema';
import { ThumbsignalUpdateWithoutReviewInputSchema } from './ThumbsignalUpdateWithoutReviewInputSchema';
import { ThumbsignalUncheckedUpdateWithoutReviewInputSchema } from './ThumbsignalUncheckedUpdateWithoutReviewInputSchema';

export const ThumbsignalUpdateWithWhereUniqueWithoutReviewInputSchema: z.ZodType<Prisma.ThumbsignalUpdateWithWhereUniqueWithoutReviewInput> = z.object({
  where: z.lazy(() => ThumbsignalWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ThumbsignalUpdateWithoutReviewInputSchema),z.lazy(() => ThumbsignalUncheckedUpdateWithoutReviewInputSchema) ]),
}).strict();

export default ThumbsignalUpdateWithWhereUniqueWithoutReviewInputSchema;
