import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { CategoriesOnRestaurantsListRelationFilterSchema } from './CategoriesOnRestaurantsListRelationFilterSchema';
import { ReviewListRelationFilterSchema } from './ReviewListRelationFilterSchema';

export const RestaurantWhereInputSchema: z.ZodType<Prisma.RestaurantWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => RestaurantWhereInputSchema),
          z.lazy(() => RestaurantWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => RestaurantWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => RestaurantWhereInputSchema),
          z.lazy(() => RestaurantWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
      name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      createdAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      createdBy: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      categories: z
        .lazy(() => CategoriesOnRestaurantsListRelationFilterSchema)
        .optional(),
      reviews: z.lazy(() => ReviewListRelationFilterSchema).optional(),
    })
    .strict();

export default RestaurantWhereInputSchema;
