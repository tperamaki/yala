import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryCreateWithoutRestaurantsInputSchema } from './CategoryCreateWithoutRestaurantsInputSchema';
import { CategoryUncheckedCreateWithoutRestaurantsInputSchema } from './CategoryUncheckedCreateWithoutRestaurantsInputSchema';
import { CategoryCreateOrConnectWithoutRestaurantsInputSchema } from './CategoryCreateOrConnectWithoutRestaurantsInputSchema';
import { CategoryUpsertWithoutRestaurantsInputSchema } from './CategoryUpsertWithoutRestaurantsInputSchema';
import { CategoryWhereUniqueInputSchema } from './CategoryWhereUniqueInputSchema';
import { CategoryUpdateToOneWithWhereWithoutRestaurantsInputSchema } from './CategoryUpdateToOneWithWhereWithoutRestaurantsInputSchema';
import { CategoryUpdateWithoutRestaurantsInputSchema } from './CategoryUpdateWithoutRestaurantsInputSchema';
import { CategoryUncheckedUpdateWithoutRestaurantsInputSchema } from './CategoryUncheckedUpdateWithoutRestaurantsInputSchema';

export const CategoryUpdateOneRequiredWithoutRestaurantsNestedInputSchema: z.ZodType<Prisma.CategoryUpdateOneRequiredWithoutRestaurantsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutRestaurantsInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutRestaurantsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutRestaurantsInputSchema).optional(),
  upsert: z.lazy(() => CategoryUpsertWithoutRestaurantsInputSchema).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CategoryUpdateToOneWithWhereWithoutRestaurantsInputSchema),z.lazy(() => CategoryUpdateWithoutRestaurantsInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutRestaurantsInputSchema) ]).optional(),
}).strict();

export default CategoryUpdateOneRequiredWithoutRestaurantsNestedInputSchema;
