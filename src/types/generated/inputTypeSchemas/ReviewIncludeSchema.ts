import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RestaurantArgsSchema } from "../outputTypeSchemas/RestaurantArgsSchema"
import { ThumbsignalFindManyArgsSchema } from "../outputTypeSchemas/ThumbsignalFindManyArgsSchema"
import { ReviewCountOutputTypeArgsSchema } from "../outputTypeSchemas/ReviewCountOutputTypeArgsSchema"

export const ReviewIncludeSchema: z.ZodType<Prisma.ReviewInclude> = z.object({
  restaurant: z.union([z.boolean(),z.lazy(() => RestaurantArgsSchema)]).optional(),
  thumbsignals: z.union([z.boolean(),z.lazy(() => ThumbsignalFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ReviewCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default ReviewIncludeSchema;
