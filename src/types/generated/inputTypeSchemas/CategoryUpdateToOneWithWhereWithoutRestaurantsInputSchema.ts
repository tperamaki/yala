import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryWhereInputSchema } from './CategoryWhereInputSchema';
import { CategoryUpdateWithoutRestaurantsInputSchema } from './CategoryUpdateWithoutRestaurantsInputSchema';
import { CategoryUncheckedUpdateWithoutRestaurantsInputSchema } from './CategoryUncheckedUpdateWithoutRestaurantsInputSchema';

export const CategoryUpdateToOneWithWhereWithoutRestaurantsInputSchema: z.ZodType<Prisma.CategoryUpdateToOneWithWhereWithoutRestaurantsInput> =
  z
    .object({
      where: z.lazy(() => CategoryWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => CategoryUpdateWithoutRestaurantsInputSchema),
        z.lazy(() => CategoryUncheckedUpdateWithoutRestaurantsInputSchema),
      ]),
    })
    .strict();

export default CategoryUpdateToOneWithWhereWithoutRestaurantsInputSchema;
