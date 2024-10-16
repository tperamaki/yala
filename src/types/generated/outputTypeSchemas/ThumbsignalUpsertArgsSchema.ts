import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ThumbsignalIncludeSchema } from '../inputTypeSchemas/ThumbsignalIncludeSchema'
import { ThumbsignalWhereUniqueInputSchema } from '../inputTypeSchemas/ThumbsignalWhereUniqueInputSchema'
import { ThumbsignalCreateInputSchema } from '../inputTypeSchemas/ThumbsignalCreateInputSchema'
import { ThumbsignalUncheckedCreateInputSchema } from '../inputTypeSchemas/ThumbsignalUncheckedCreateInputSchema'
import { ThumbsignalUpdateInputSchema } from '../inputTypeSchemas/ThumbsignalUpdateInputSchema'
import { ThumbsignalUncheckedUpdateInputSchema } from '../inputTypeSchemas/ThumbsignalUncheckedUpdateInputSchema'
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

export const ThumbsignalUpsertArgsSchema: z.ZodType<Prisma.ThumbsignalUpsertArgs> = z.object({
  select: ThumbsignalSelectSchema.optional(),
  include: ThumbsignalIncludeSchema.optional(),
  where: ThumbsignalWhereUniqueInputSchema,
  create: z.union([ ThumbsignalCreateInputSchema,ThumbsignalUncheckedCreateInputSchema ]),
  update: z.union([ ThumbsignalUpdateInputSchema,ThumbsignalUncheckedUpdateInputSchema ]),
}).strict() ;

export default ThumbsignalUpsertArgsSchema;
