import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ThumbsignalCreateManyInputSchema } from '../inputTypeSchemas/ThumbsignalCreateManyInputSchema'

export const ThumbsignalCreateManyArgsSchema: z.ZodType<Prisma.ThumbsignalCreateManyArgs> = z.object({
  data: z.union([ ThumbsignalCreateManyInputSchema,ThumbsignalCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ThumbsignalCreateManyArgsSchema;
