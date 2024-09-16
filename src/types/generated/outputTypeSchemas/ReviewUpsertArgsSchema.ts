import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewIncludeSchema } from '../inputTypeSchemas/ReviewIncludeSchema'
import { ReviewWhereUniqueInputSchema } from '../inputTypeSchemas/ReviewWhereUniqueInputSchema'
import { ReviewCreateInputSchema } from '../inputTypeSchemas/ReviewCreateInputSchema'
import { ReviewUncheckedCreateInputSchema } from '../inputTypeSchemas/ReviewUncheckedCreateInputSchema'
import { ReviewUpdateInputSchema } from '../inputTypeSchemas/ReviewUpdateInputSchema'
import { ReviewUncheckedUpdateInputSchema } from '../inputTypeSchemas/ReviewUncheckedUpdateInputSchema'
import { RestaurantArgsSchema } from "../outputTypeSchemas/RestaurantArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReviewSelectSchema: z.ZodType<Prisma.ReviewSelect> = z.object({
  restaurantId: z.boolean().optional(),
  rating: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  comment: z.boolean().optional(),
  imageId: z.boolean().optional(),
  restaurant: z.union([z.boolean(),z.lazy(() => RestaurantArgsSchema)]).optional(),
}).strict()

export const ReviewUpsertArgsSchema: z.ZodType<Prisma.ReviewUpsertArgs> = z.object({
  select: ReviewSelectSchema.optional(),
  include: ReviewIncludeSchema.optional(),
  where: ReviewWhereUniqueInputSchema,
  create: z.union([ ReviewCreateInputSchema,ReviewUncheckedCreateInputSchema ]),
  update: z.union([ ReviewUpdateInputSchema,ReviewUncheckedUpdateInputSchema ]),
}).strict() ;

export default ReviewUpsertArgsSchema;
