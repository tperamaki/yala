import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ThumbsignalWhereInputSchema } from '../inputTypeSchemas/ThumbsignalWhereInputSchema'
import { ThumbsignalOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ThumbsignalOrderByWithAggregationInputSchema'
import { ThumbsignalScalarFieldEnumSchema } from '../inputTypeSchemas/ThumbsignalScalarFieldEnumSchema'
import { ThumbsignalScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ThumbsignalScalarWhereWithAggregatesInputSchema'

export const ThumbsignalGroupByArgsSchema: z.ZodType<Prisma.ThumbsignalGroupByArgs> = z.object({
  where: ThumbsignalWhereInputSchema.optional(),
  orderBy: z.union([ ThumbsignalOrderByWithAggregationInputSchema.array(),ThumbsignalOrderByWithAggregationInputSchema ]).optional(),
  by: ThumbsignalScalarFieldEnumSchema.array(),
  having: ThumbsignalScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ThumbsignalGroupByArgsSchema;
