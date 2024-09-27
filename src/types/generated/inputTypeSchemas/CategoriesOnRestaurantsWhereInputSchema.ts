import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { CategoryRelationFilterSchema } from './CategoryRelationFilterSchema';
import { CategoryWhereInputSchema } from './CategoryWhereInputSchema';
import { RestaurantRelationFilterSchema } from './RestaurantRelationFilterSchema';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';

export const CategoriesOnRestaurantsWhereInputSchema: z.ZodType<Prisma.CategoriesOnRestaurantsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CategoriesOnRestaurantsWhereInputSchema),z.lazy(() => CategoriesOnRestaurantsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CategoriesOnRestaurantsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CategoriesOnRestaurantsWhereInputSchema),z.lazy(() => CategoriesOnRestaurantsWhereInputSchema).array() ]).optional(),
  categoryId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  restaurantId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  assignedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  assignedBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  category: z.union([ z.lazy(() => CategoryRelationFilterSchema),z.lazy(() => CategoryWhereInputSchema) ]).optional(),
  restaurant: z.union([ z.lazy(() => RestaurantRelationFilterSchema),z.lazy(() => RestaurantWhereInputSchema) ]).optional(),
}).strict();

export default CategoriesOnRestaurantsWhereInputSchema;
