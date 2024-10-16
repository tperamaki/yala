import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ThumbsignalReviewedRestaurantIdReviewCreatedByCreatedByCompoundUniqueInputSchema } from './ThumbsignalReviewedRestaurantIdReviewCreatedByCreatedByCompoundUniqueInputSchema';
import { ThumbsignalWhereInputSchema } from './ThumbsignalWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { ReviewRelationFilterSchema } from './ReviewRelationFilterSchema';
import { ReviewWhereInputSchema } from './ReviewWhereInputSchema';

export const ThumbsignalWhereUniqueInputSchema: z.ZodType<Prisma.ThumbsignalWhereUniqueInput> = z.object({
  reviewedRestaurantId_reviewCreatedBy_createdBy: z.lazy(() => ThumbsignalReviewedRestaurantIdReviewCreatedByCreatedByCompoundUniqueInputSchema)
})
.and(z.object({
  reviewedRestaurantId_reviewCreatedBy_createdBy: z.lazy(() => ThumbsignalReviewedRestaurantIdReviewCreatedByCreatedByCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => ThumbsignalWhereInputSchema),z.lazy(() => ThumbsignalWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ThumbsignalWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ThumbsignalWhereInputSchema),z.lazy(() => ThumbsignalWhereInputSchema).array() ]).optional(),
  reviewedRestaurantId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  reviewCreatedBy: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  signalVariant: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdBy: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  review: z.union([ z.lazy(() => ReviewRelationFilterSchema),z.lazy(() => ReviewWhereInputSchema) ]).optional(),
}).strict());

export default ThumbsignalWhereUniqueInputSchema;
