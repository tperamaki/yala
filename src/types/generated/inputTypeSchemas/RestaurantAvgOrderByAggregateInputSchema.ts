import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RestaurantAvgOrderByAggregateInputSchema: z.ZodType<Prisma.RestaurantAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RestaurantAvgOrderByAggregateInputSchema;
