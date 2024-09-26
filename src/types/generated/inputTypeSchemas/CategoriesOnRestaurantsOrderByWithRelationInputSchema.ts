import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { CategoryOrderByWithRelationInputSchema } from './CategoryOrderByWithRelationInputSchema';
import { RestaurantOrderByWithRelationInputSchema } from './RestaurantOrderByWithRelationInputSchema';

export const CategoriesOnRestaurantsOrderByWithRelationInputSchema: z.ZodType<Prisma.CategoriesOnRestaurantsOrderByWithRelationInput> =
  z
    .object({
      categoryId: z.lazy(() => SortOrderSchema).optional(),
      restaurantId: z.lazy(() => SortOrderSchema).optional(),
      assignedAt: z.lazy(() => SortOrderSchema).optional(),
      assignedBy: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      category: z.lazy(() => CategoryOrderByWithRelationInputSchema).optional(),
      restaurant: z
        .lazy(() => RestaurantOrderByWithRelationInputSchema)
        .optional(),
    })
    .strict();

export default CategoriesOnRestaurantsOrderByWithRelationInputSchema;
