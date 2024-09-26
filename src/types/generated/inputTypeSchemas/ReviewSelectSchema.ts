import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RestaurantArgsSchema } from "../outputTypeSchemas/RestaurantArgsSchema"

export const ReviewSelectSchema: z.ZodType<Prisma.ReviewSelect> = z.object({
  restaurantId: z.boolean().optional(),
  rating: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  comment: z.boolean().optional(),
  imageId: z.boolean().optional(),
  restaurant: z.union([z.boolean(),z.lazy(() => RestaurantArgsSchema)]).optional(),
}).strict()

export default ReviewSelectSchema;
