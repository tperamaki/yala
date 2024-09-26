import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { CategoriesOnRestaurantsListRelationFilterSchema } from './CategoriesOnRestaurantsListRelationFilterSchema';
import { ReviewListRelationFilterSchema } from './ReviewListRelationFilterSchema';

export const RestaurantWhereUniqueInputSchema: z.ZodType<Prisma.RestaurantWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    name: z.string()
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    name: z.string(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  AND: z.union([ z.lazy(() => RestaurantWhereInputSchema),z.lazy(() => RestaurantWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RestaurantWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RestaurantWhereInputSchema),z.lazy(() => RestaurantWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdBy: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  categories: z.lazy(() => CategoriesOnRestaurantsListRelationFilterSchema).optional(),
  reviews: z.lazy(() => ReviewListRelationFilterSchema).optional()
}).strict());

export default RestaurantWhereUniqueInputSchema;
