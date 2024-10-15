import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewUpdateManyMutationInputSchema } from '../inputTypeSchemas/ReviewUpdateManyMutationInputSchema'
import { ReviewUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ReviewUncheckedUpdateManyInputSchema'
import { ReviewWhereInputSchema } from '../inputTypeSchemas/ReviewWhereInputSchema'

export const ReviewUpdateManyArgsSchema: z.ZodType<Prisma.ReviewUpdateManyArgs> = z.object({
  data: z.union([ ReviewUpdateManyMutationInputSchema,ReviewUncheckedUpdateManyInputSchema ]),
  where: ReviewWhereInputSchema.optional(),
}).strict() ;

export default ReviewUpdateManyArgsSchema;
