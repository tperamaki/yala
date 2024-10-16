import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const ThumbsignalScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ThumbsignalScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ThumbsignalScalarWhereWithAggregatesInputSchema),z.lazy(() => ThumbsignalScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ThumbsignalScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ThumbsignalScalarWhereWithAggregatesInputSchema),z.lazy(() => ThumbsignalScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  reviewedRestaurantId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  reviewCreatedBy: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  signalVariant: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  createdBy: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default ThumbsignalScalarWhereWithAggregatesInputSchema;
