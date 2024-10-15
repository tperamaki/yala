import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const RestaurantScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RestaurantScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => RestaurantScalarWhereWithAggregatesInputSchema),z.lazy(() => RestaurantScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => RestaurantScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RestaurantScalarWhereWithAggregatesInputSchema),z.lazy(() => RestaurantScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  createdBy: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default RestaurantScalarWhereWithAggregatesInputSchema;
