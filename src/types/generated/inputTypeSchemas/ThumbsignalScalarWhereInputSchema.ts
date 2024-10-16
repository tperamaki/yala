import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const ThumbsignalScalarWhereInputSchema: z.ZodType<Prisma.ThumbsignalScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ThumbsignalScalarWhereInputSchema),z.lazy(() => ThumbsignalScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ThumbsignalScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ThumbsignalScalarWhereInputSchema),z.lazy(() => ThumbsignalScalarWhereInputSchema).array() ]).optional(),
  reviewedRestaurantId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  reviewCreatedBy: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  signalVariant: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdBy: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export default ThumbsignalScalarWhereInputSchema;
