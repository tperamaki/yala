import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RestaurantArgsSchema } from "../outputTypeSchemas/RestaurantArgsSchema"

export const ReviewIncludeSchema: z.ZodType<Prisma.ReviewInclude> = z.object({
  restaurant: z.union([z.boolean(),z.lazy(() => RestaurantArgsSchema)]).optional(),
}).strict()

export default ReviewIncludeSchema;
