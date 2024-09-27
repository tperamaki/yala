import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoriesOnRestaurantsCreateWithoutCategoryInputSchema } from './CategoriesOnRestaurantsCreateWithoutCategoryInputSchema';
import { CategoriesOnRestaurantsUncheckedCreateWithoutCategoryInputSchema } from './CategoriesOnRestaurantsUncheckedCreateWithoutCategoryInputSchema';
import { CategoriesOnRestaurantsCreateOrConnectWithoutCategoryInputSchema } from './CategoriesOnRestaurantsCreateOrConnectWithoutCategoryInputSchema';
import { CategoriesOnRestaurantsUpsertWithWhereUniqueWithoutCategoryInputSchema } from './CategoriesOnRestaurantsUpsertWithWhereUniqueWithoutCategoryInputSchema';
import { CategoriesOnRestaurantsCreateManyCategoryInputEnvelopeSchema } from './CategoriesOnRestaurantsCreateManyCategoryInputEnvelopeSchema';
import { CategoriesOnRestaurantsWhereUniqueInputSchema } from './CategoriesOnRestaurantsWhereUniqueInputSchema';
import { CategoriesOnRestaurantsUpdateWithWhereUniqueWithoutCategoryInputSchema } from './CategoriesOnRestaurantsUpdateWithWhereUniqueWithoutCategoryInputSchema';
import { CategoriesOnRestaurantsUpdateManyWithWhereWithoutCategoryInputSchema } from './CategoriesOnRestaurantsUpdateManyWithWhereWithoutCategoryInputSchema';
import { CategoriesOnRestaurantsScalarWhereInputSchema } from './CategoriesOnRestaurantsScalarWhereInputSchema';

export const CategoriesOnRestaurantsUpdateManyWithoutCategoryNestedInputSchema: z.ZodType<Prisma.CategoriesOnRestaurantsUpdateManyWithoutCategoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => CategoriesOnRestaurantsCreateWithoutCategoryInputSchema),z.lazy(() => CategoriesOnRestaurantsCreateWithoutCategoryInputSchema).array(),z.lazy(() => CategoriesOnRestaurantsUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => CategoriesOnRestaurantsUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoriesOnRestaurantsCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => CategoriesOnRestaurantsCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CategoriesOnRestaurantsUpsertWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => CategoriesOnRestaurantsUpsertWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CategoriesOnRestaurantsCreateManyCategoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CategoriesOnRestaurantsWhereUniqueInputSchema),z.lazy(() => CategoriesOnRestaurantsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CategoriesOnRestaurantsWhereUniqueInputSchema),z.lazy(() => CategoriesOnRestaurantsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CategoriesOnRestaurantsWhereUniqueInputSchema),z.lazy(() => CategoriesOnRestaurantsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CategoriesOnRestaurantsWhereUniqueInputSchema),z.lazy(() => CategoriesOnRestaurantsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CategoriesOnRestaurantsUpdateWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => CategoriesOnRestaurantsUpdateWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CategoriesOnRestaurantsUpdateManyWithWhereWithoutCategoryInputSchema),z.lazy(() => CategoriesOnRestaurantsUpdateManyWithWhereWithoutCategoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CategoriesOnRestaurantsScalarWhereInputSchema),z.lazy(() => CategoriesOnRestaurantsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default CategoriesOnRestaurantsUpdateManyWithoutCategoryNestedInputSchema;
