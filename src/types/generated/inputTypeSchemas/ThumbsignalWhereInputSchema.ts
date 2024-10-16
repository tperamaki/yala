import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { ReviewRelationFilterSchema } from './ReviewRelationFilterSchema';
import { ReviewWhereInputSchema } from './ReviewWhereInputSchema';

export const ThumbsignalWhereInputSchema: z.ZodType<Prisma.ThumbsignalWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ThumbsignalWhereInputSchema),z.lazy(() => ThumbsignalWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ThumbsignalWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ThumbsignalWhereInputSchema),z.lazy(() => ThumbsignalWhereInputSchema).array() ]).optional(),
  reviewedRestaurantId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  reviewCreatedBy: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  signalVariant: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdBy: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  review: z.union([ z.lazy(() => ReviewRelationFilterSchema),z.lazy(() => ReviewWhereInputSchema) ]).optional(),
}).strict();

export default ThumbsignalWhereInputSchema;
