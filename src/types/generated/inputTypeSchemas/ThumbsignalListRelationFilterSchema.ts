import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ThumbsignalWhereInputSchema } from './ThumbsignalWhereInputSchema';

export const ThumbsignalListRelationFilterSchema: z.ZodType<Prisma.ThumbsignalListRelationFilter> = z.object({
  every: z.lazy(() => ThumbsignalWhereInputSchema).optional(),
  some: z.lazy(() => ThumbsignalWhereInputSchema).optional(),
  none: z.lazy(() => ThumbsignalWhereInputSchema).optional()
}).strict();

export default ThumbsignalListRelationFilterSchema;
