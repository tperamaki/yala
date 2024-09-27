import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryCreateWithoutRestaurantsInputSchema } from './CategoryCreateWithoutRestaurantsInputSchema';
import { CategoryUncheckedCreateWithoutRestaurantsInputSchema } from './CategoryUncheckedCreateWithoutRestaurantsInputSchema';
import { CategoryCreateOrConnectWithoutRestaurantsInputSchema } from './CategoryCreateOrConnectWithoutRestaurantsInputSchema';
import { CategoryWhereUniqueInputSchema } from './CategoryWhereUniqueInputSchema';

export const CategoryCreateNestedOneWithoutRestaurantsInputSchema: z.ZodType<Prisma.CategoryCreateNestedOneWithoutRestaurantsInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutRestaurantsInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutRestaurantsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutRestaurantsInputSchema).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputSchema).optional()
}).strict();

export default CategoryCreateNestedOneWithoutRestaurantsInputSchema;
