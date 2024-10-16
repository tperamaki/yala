import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ThumbsignalSelectSchema } from '../inputTypeSchemas/ThumbsignalSelectSchema';
import { ThumbsignalIncludeSchema } from '../inputTypeSchemas/ThumbsignalIncludeSchema';

export const ThumbsignalArgsSchema: z.ZodType<Prisma.ThumbsignalDefaultArgs> = z.object({
  select: z.lazy(() => ThumbsignalSelectSchema).optional(),
  include: z.lazy(() => ThumbsignalIncludeSchema).optional(),
}).strict();

export default ThumbsignalArgsSchema;
