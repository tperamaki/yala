import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewCreateNestedOneWithoutThumbsignalsInputSchema } from './ReviewCreateNestedOneWithoutThumbsignalsInputSchema';

export const ThumbsignalCreateInputSchema: z.ZodType<Prisma.ThumbsignalCreateInput> = z.object({
  signalVariant: z.string(),
  createdAt: z.coerce.date().optional(),
  createdBy: z.string(),
  review: z.lazy(() => ReviewCreateNestedOneWithoutThumbsignalsInputSchema)
}).strict();

export default ThumbsignalCreateInputSchema;
