import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewArgsSchema } from "../outputTypeSchemas/ReviewArgsSchema"

export const ThumbsignalSelectSchema: z.ZodType<Prisma.ThumbsignalSelect> = z.object({
  reviewedRestaurantId: z.boolean().optional(),
  reviewCreatedBy: z.boolean().optional(),
  signalVariant: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  review: z.union([z.boolean(),z.lazy(() => ReviewArgsSchema)]).optional(),
}).strict()

export default ThumbsignalSelectSchema;
