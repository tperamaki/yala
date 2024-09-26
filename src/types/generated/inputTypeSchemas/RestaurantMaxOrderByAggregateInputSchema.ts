import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RestaurantMaxOrderByAggregateInputSchema: z.ZodType<Prisma.RestaurantMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      createdBy: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default RestaurantMaxOrderByAggregateInputSchema;
