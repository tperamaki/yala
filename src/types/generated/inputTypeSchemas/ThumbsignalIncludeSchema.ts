import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewArgsSchema } from "../outputTypeSchemas/ReviewArgsSchema"

export const ThumbsignalIncludeSchema: z.ZodType<Prisma.ThumbsignalInclude> = z.object({
  review: z.union([z.boolean(),z.lazy(() => ReviewArgsSchema)]).optional(),
}).strict()

export default ThumbsignalIncludeSchema;
