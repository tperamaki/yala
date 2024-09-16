import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const CategoriesOnRestaurantsScalarWhereInputSchema: z.ZodType<Prisma.CategoriesOnRestaurantsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CategoriesOnRestaurantsScalarWhereInputSchema),z.lazy(() => CategoriesOnRestaurantsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CategoriesOnRestaurantsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CategoriesOnRestaurantsScalarWhereInputSchema),z.lazy(() => CategoriesOnRestaurantsScalarWhereInputSchema).array() ]).optional(),
  categoryId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  restaurantId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  assignedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  assignedBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default CategoriesOnRestaurantsScalarWhereInputSchema;
