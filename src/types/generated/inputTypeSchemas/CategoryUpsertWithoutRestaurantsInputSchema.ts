import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryUpdateWithoutRestaurantsInputSchema } from './CategoryUpdateWithoutRestaurantsInputSchema';
import { CategoryUncheckedUpdateWithoutRestaurantsInputSchema } from './CategoryUncheckedUpdateWithoutRestaurantsInputSchema';
import { CategoryCreateWithoutRestaurantsInputSchema } from './CategoryCreateWithoutRestaurantsInputSchema';
import { CategoryUncheckedCreateWithoutRestaurantsInputSchema } from './CategoryUncheckedCreateWithoutRestaurantsInputSchema';
import { CategoryWhereInputSchema } from './CategoryWhereInputSchema';

export const CategoryUpsertWithoutRestaurantsInputSchema: z.ZodType<Prisma.CategoryUpsertWithoutRestaurantsInput> = z.object({
  update: z.union([ z.lazy(() => CategoryUpdateWithoutRestaurantsInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutRestaurantsInputSchema) ]),
  create: z.union([ z.lazy(() => CategoryCreateWithoutRestaurantsInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutRestaurantsInputSchema) ]),
  where: z.lazy(() => CategoryWhereInputSchema).optional()
}).strict();

export default CategoryUpsertWithoutRestaurantsInputSchema;
