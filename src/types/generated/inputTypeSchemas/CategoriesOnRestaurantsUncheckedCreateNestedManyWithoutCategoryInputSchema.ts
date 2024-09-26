import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoriesOnRestaurantsCreateWithoutCategoryInputSchema } from './CategoriesOnRestaurantsCreateWithoutCategoryInputSchema';
import { CategoriesOnRestaurantsUncheckedCreateWithoutCategoryInputSchema } from './CategoriesOnRestaurantsUncheckedCreateWithoutCategoryInputSchema';
import { CategoriesOnRestaurantsCreateOrConnectWithoutCategoryInputSchema } from './CategoriesOnRestaurantsCreateOrConnectWithoutCategoryInputSchema';
import { CategoriesOnRestaurantsCreateManyCategoryInputEnvelopeSchema } from './CategoriesOnRestaurantsCreateManyCategoryInputEnvelopeSchema';
import { CategoriesOnRestaurantsWhereUniqueInputSchema } from './CategoriesOnRestaurantsWhereUniqueInputSchema';

export const CategoriesOnRestaurantsUncheckedCreateNestedManyWithoutCategoryInputSchema: z.ZodType<Prisma.CategoriesOnRestaurantsUncheckedCreateNestedManyWithoutCategoryInput> = z.object({
  create: z.union([ z.lazy(() => CategoriesOnRestaurantsCreateWithoutCategoryInputSchema),z.lazy(() => CategoriesOnRestaurantsCreateWithoutCategoryInputSchema).array(),z.lazy(() => CategoriesOnRestaurantsUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => CategoriesOnRestaurantsUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoriesOnRestaurantsCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => CategoriesOnRestaurantsCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CategoriesOnRestaurantsCreateManyCategoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CategoriesOnRestaurantsWhereUniqueInputSchema),z.lazy(() => CategoriesOnRestaurantsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default CategoriesOnRestaurantsUncheckedCreateNestedManyWithoutCategoryInputSchema;
