import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ThumbsignalIncludeSchema } from '../inputTypeSchemas/ThumbsignalIncludeSchema'
import { ThumbsignalUpdateInputSchema } from '../inputTypeSchemas/ThumbsignalUpdateInputSchema'
import { ThumbsignalUncheckedUpdateInputSchema } from '../inputTypeSchemas/ThumbsignalUncheckedUpdateInputSchema'
import { ThumbsignalWhereUniqueInputSchema } from '../inputTypeSchemas/ThumbsignalWhereUniqueInputSchema'
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

export const ThumbsignalUpdateArgsSchema: z.ZodType<Prisma.ThumbsignalUpdateArgs> = z.object({
  select: ThumbsignalSelectSchema.optional(),
  include: ThumbsignalIncludeSchema.optional(),
  data: z.union([ ThumbsignalUpdateInputSchema,ThumbsignalUncheckedUpdateInputSchema ]),
  where: ThumbsignalWhereUniqueInputSchema,
}).strict() ;

export default ThumbsignalUpdateArgsSchema;
