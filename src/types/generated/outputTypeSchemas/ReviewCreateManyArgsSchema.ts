import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewCreateManyInputSchema } from '../inputTypeSchemas/ReviewCreateManyInputSchema'

export const ReviewCreateManyArgsSchema: z.ZodType<Prisma.ReviewCreateManyArgs> = z.object({
  data: z.union([ ReviewCreateManyInputSchema,ReviewCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ReviewCreateManyArgsSchema;
