import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewIncludeSchema } from '../inputTypeSchemas/ReviewIncludeSchema'
import { ReviewUpdateInputSchema } from '../inputTypeSchemas/ReviewUpdateInputSchema'
import { ReviewUncheckedUpdateInputSchema } from '../inputTypeSchemas/ReviewUncheckedUpdateInputSchema'
import { ReviewWhereUniqueInputSchema } from '../inputTypeSchemas/ReviewWhereUniqueInputSchema'
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

export const ReviewUpdateArgsSchema: z.ZodType<Prisma.ReviewUpdateArgs> = z.object({
  select: ReviewSelectSchema.optional(),
  include: ReviewIncludeSchema.optional(),
  data: z.union([ ReviewUpdateInputSchema,ReviewUncheckedUpdateInputSchema ]),
  where: ReviewWhereUniqueInputSchema,
}).strict() ;

export default ReviewUpdateArgsSchema;
