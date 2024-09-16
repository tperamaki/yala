import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryWhereUniqueInputSchema } from './CategoryWhereUniqueInputSchema';
import { CategoryCreateWithoutRestaurantsInputSchema } from './CategoryCreateWithoutRestaurantsInputSchema';
import { CategoryUncheckedCreateWithoutRestaurantsInputSchema } from './CategoryUncheckedCreateWithoutRestaurantsInputSchema';

export const CategoryCreateOrConnectWithoutRestaurantsInputSchema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutRestaurantsInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CategoryCreateWithoutRestaurantsInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutRestaurantsInputSchema) ]),
}).strict();

export default CategoryCreateOrConnectWithoutRestaurantsInputSchema;
