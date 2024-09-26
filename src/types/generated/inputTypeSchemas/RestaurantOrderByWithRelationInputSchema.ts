import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { CategoriesOnRestaurantsOrderByRelationAggregateInputSchema } from './CategoriesOnRestaurantsOrderByRelationAggregateInputSchema';
import { ReviewOrderByRelationAggregateInputSchema } from './ReviewOrderByRelationAggregateInputSchema';

export const RestaurantOrderByWithRelationInputSchema: z.ZodType<Prisma.RestaurantOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.lazy(() => SortOrderSchema).optional(),
  categories: z.lazy(() => CategoriesOnRestaurantsOrderByRelationAggregateInputSchema).optional(),
  reviews: z.lazy(() => ReviewOrderByRelationAggregateInputSchema).optional()
}).strict();

export default RestaurantOrderByWithRelationInputSchema;
