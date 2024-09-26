import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoriesOnRestaurantsFindManyArgsSchema } from '../outputTypeSchemas/CategoriesOnRestaurantsFindManyArgsSchema';
import { ReviewFindManyArgsSchema } from '../outputTypeSchemas/ReviewFindManyArgsSchema';
import { RestaurantCountOutputTypeArgsSchema } from '../outputTypeSchemas/RestaurantCountOutputTypeArgsSchema';

export const RestaurantIncludeSchema: z.ZodType<Prisma.RestaurantInclude> = z
  .object({
    categories: z
      .union([
        z.boolean(),
        z.lazy(() => CategoriesOnRestaurantsFindManyArgsSchema),
      ])
      .optional(),
    reviews: z
      .union([z.boolean(), z.lazy(() => ReviewFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => RestaurantCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

export default RestaurantIncludeSchema;
