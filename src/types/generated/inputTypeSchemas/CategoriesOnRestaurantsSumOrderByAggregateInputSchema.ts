import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CategoriesOnRestaurantsSumOrderByAggregateInputSchema: z.ZodType<Prisma.CategoriesOnRestaurantsSumOrderByAggregateInput> = z.object({
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  restaurantId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default CategoriesOnRestaurantsSumOrderByAggregateInputSchema;
