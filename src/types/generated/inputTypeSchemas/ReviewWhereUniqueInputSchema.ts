import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewRestaurantIdCreatedByCompoundUniqueInputSchema } from './ReviewRestaurantIdCreatedByCompoundUniqueInputSchema';
import { ReviewWhereInputSchema } from './ReviewWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { RestaurantRelationFilterSchema } from './RestaurantRelationFilterSchema';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';
import { ThumbsignalListRelationFilterSchema } from './ThumbsignalListRelationFilterSchema';

export const ReviewWhereUniqueInputSchema: z.ZodType<Prisma.ReviewWhereUniqueInput> = z.object({
  restaurantId_createdBy: z.lazy(() => ReviewRestaurantIdCreatedByCompoundUniqueInputSchema)
})
.and(z.object({
  restaurantId_createdBy: z.lazy(() => ReviewRestaurantIdCreatedByCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => ReviewWhereInputSchema),z.lazy(() => ReviewWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReviewWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReviewWhereInputSchema),z.lazy(() => ReviewWhereInputSchema).array() ]).optional(),
  restaurantId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  rating: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdBy: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  comment: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  imageId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  restaurant: z.union([ z.lazy(() => RestaurantRelationFilterSchema),z.lazy(() => RestaurantWhereInputSchema) ]).optional(),
  thumbsignals: z.lazy(() => ThumbsignalListRelationFilterSchema).optional()
}).strict());

export default ReviewWhereUniqueInputSchema;
