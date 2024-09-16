import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const CategoriesOnRestaurantsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CategoriesOnRestaurantsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CategoriesOnRestaurantsScalarWhereWithAggregatesInputSchema),z.lazy(() => CategoriesOnRestaurantsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CategoriesOnRestaurantsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CategoriesOnRestaurantsScalarWhereWithAggregatesInputSchema),z.lazy(() => CategoriesOnRestaurantsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  categoryId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  restaurantId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  assignedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  assignedBy: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default CategoriesOnRestaurantsScalarWhereWithAggregatesInputSchema;
