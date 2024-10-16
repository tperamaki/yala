import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const ReviewCountOutputTypeSelectSchema: z.ZodType<Prisma.ReviewCountOutputTypeSelect> = z.object({
  thumbsignals: z.boolean().optional(),
}).strict();

export default ReviewCountOutputTypeSelectSchema;
