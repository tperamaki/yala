import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ThumbsignalWhereInputSchema } from '../inputTypeSchemas/ThumbsignalWhereInputSchema'

export const ThumbsignalDeleteManyArgsSchema: z.ZodType<Prisma.ThumbsignalDeleteManyArgs> = z.object({
  where: ThumbsignalWhereInputSchema.optional(),
}).strict() ;

export default ThumbsignalDeleteManyArgsSchema;
