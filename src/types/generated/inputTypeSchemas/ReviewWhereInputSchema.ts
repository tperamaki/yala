import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { RestaurantRelationFilterSchema } from './RestaurantRelationFilterSchema';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';
import { ThumbsignalListRelationFilterSchema } from './ThumbsignalListRelationFilterSchema';

export const ReviewWhereInputSchema: z.ZodType<Prisma.ReviewWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ReviewWhereInputSchema),z.lazy(() => ReviewWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReviewWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReviewWhereInputSchema),z.lazy(() => ReviewWhereInputSchema).array() ]).optional(),
  restaurantId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  rating: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdBy: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  comment: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  imageId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  restaurant: z.union([ z.lazy(() => RestaurantRelationFilterSchema),z.lazy(() => RestaurantWhereInputSchema) ]).optional(),
  thumbsignals: z.lazy(() => ThumbsignalListRelationFilterSchema).optional()
}).strict();

export default ReviewWhereInputSchema;
