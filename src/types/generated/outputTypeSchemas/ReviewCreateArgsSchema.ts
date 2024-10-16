import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewIncludeSchema } from '../inputTypeSchemas/ReviewIncludeSchema'
import { ReviewCreateInputSchema } from '../inputTypeSchemas/ReviewCreateInputSchema'
import { ReviewUncheckedCreateInputSchema } from '../inputTypeSchemas/ReviewUncheckedCreateInputSchema'
import { RestaurantArgsSchema } from "../outputTypeSchemas/RestaurantArgsSchema"
import { ThumbsignalFindManyArgsSchema } from "../outputTypeSchemas/ThumbsignalFindManyArgsSchema"
import { ReviewCountOutputTypeArgsSchema } from "../outputTypeSchemas/ReviewCountOutputTypeArgsSchema"
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
  thumbsignals: z.union([z.boolean(),z.lazy(() => ThumbsignalFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ReviewCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ReviewCreateArgsSchema: z.ZodType<Prisma.ReviewCreateArgs> = z.object({
  select: ReviewSelectSchema.optional(),
  include: ReviewIncludeSchema.optional(),
  data: z.union([ ReviewCreateInputSchema,ReviewUncheckedCreateInputSchema ]),
}).strict() ;

export default ReviewCreateArgsSchema;
