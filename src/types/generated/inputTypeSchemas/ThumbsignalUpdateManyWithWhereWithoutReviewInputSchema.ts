import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ThumbsignalScalarWhereInputSchema } from './ThumbsignalScalarWhereInputSchema';
import { ThumbsignalUpdateManyMutationInputSchema } from './ThumbsignalUpdateManyMutationInputSchema';
import { ThumbsignalUncheckedUpdateManyWithoutReviewInputSchema } from './ThumbsignalUncheckedUpdateManyWithoutReviewInputSchema';

export const ThumbsignalUpdateManyWithWhereWithoutReviewInputSchema: z.ZodType<Prisma.ThumbsignalUpdateManyWithWhereWithoutReviewInput> = z.object({
  where: z.lazy(() => ThumbsignalScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ThumbsignalUpdateManyMutationInputSchema),z.lazy(() => ThumbsignalUncheckedUpdateManyWithoutReviewInputSchema) ]),
}).strict();

export default ThumbsignalUpdateManyWithWhereWithoutReviewInputSchema;
