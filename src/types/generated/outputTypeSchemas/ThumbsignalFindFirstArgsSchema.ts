import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ThumbsignalIncludeSchema } from '../inputTypeSchemas/ThumbsignalIncludeSchema'
import { ThumbsignalWhereInputSchema } from '../inputTypeSchemas/ThumbsignalWhereInputSchema'
import { ThumbsignalOrderByWithRelationInputSchema } from '../inputTypeSchemas/ThumbsignalOrderByWithRelationInputSchema'
import { ThumbsignalWhereUniqueInputSchema } from '../inputTypeSchemas/ThumbsignalWhereUniqueInputSchema'
import { ThumbsignalScalarFieldEnumSchema } from '../inputTypeSchemas/ThumbsignalScalarFieldEnumSchema'
import { ReviewArgsSchema } from "../outputTypeSchemas/ReviewArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ThumbsignalSelectSchema: z.ZodType<Prisma.ThumbsignalSelect> = z.object({
  reviewedRestaurantId: z.boolean().optional(),
  reviewCreatedBy: z.boolean().optional(),
  signalVariant: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  review: z.union([z.boolean(),z.lazy(() => ReviewArgsSchema)]).optional(),
}).strict()

export const ThumbsignalFindFirstArgsSchema: z.ZodType<Prisma.ThumbsignalFindFirstArgs> = z.object({
  select: ThumbsignalSelectSchema.optional(),
  include: ThumbsignalIncludeSchema.optional(),
  where: ThumbsignalWhereInputSchema.optional(),
  orderBy: z.union([ ThumbsignalOrderByWithRelationInputSchema.array(),ThumbsignalOrderByWithRelationInputSchema ]).optional(),
  cursor: ThumbsignalWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ThumbsignalScalarFieldEnumSchema,ThumbsignalScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default ThumbsignalFindFirstArgsSchema;
