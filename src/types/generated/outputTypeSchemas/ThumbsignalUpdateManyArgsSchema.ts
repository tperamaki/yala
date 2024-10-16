import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ThumbsignalUpdateManyMutationInputSchema } from '../inputTypeSchemas/ThumbsignalUpdateManyMutationInputSchema'
import { ThumbsignalUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ThumbsignalUncheckedUpdateManyInputSchema'
import { ThumbsignalWhereInputSchema } from '../inputTypeSchemas/ThumbsignalWhereInputSchema'

export const ThumbsignalUpdateManyArgsSchema: z.ZodType<Prisma.ThumbsignalUpdateManyArgs> = z.object({
  data: z.union([ ThumbsignalUpdateManyMutationInputSchema,ThumbsignalUncheckedUpdateManyInputSchema ]),
  where: ThumbsignalWhereInputSchema.optional(),
}).strict() ;

export default ThumbsignalUpdateManyArgsSchema;
