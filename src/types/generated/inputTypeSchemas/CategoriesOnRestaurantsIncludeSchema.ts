import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryArgsSchema } from '../outputTypeSchemas/CategoryArgsSchema';
import { RestaurantArgsSchema } from '../outputTypeSchemas/RestaurantArgsSchema';

export const CategoriesOnRestaurantsIncludeSchema: z.ZodType<Prisma.CategoriesOnRestaurantsInclude> =
  z
    .object({
      category: z
        .union([z.boolean(), z.lazy(() => CategoryArgsSchema)])
        .optional(),
      restaurant: z
        .union([z.boolean(), z.lazy(() => RestaurantArgsSchema)])
        .optional(),
    })
    .strict();

export default CategoriesOnRestaurantsIncludeSchema;
