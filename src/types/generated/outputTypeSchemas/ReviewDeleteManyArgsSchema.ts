import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewWhereInputSchema } from '../inputTypeSchemas/ReviewWhereInputSchema'

export const ReviewDeleteManyArgsSchema: z.ZodType<Prisma.ReviewDeleteManyArgs> = z.object({
  where: ReviewWhereInputSchema.optional(),
}).strict() ;

export default ReviewDeleteManyArgsSchema;
