import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryIncludeSchema } from '../inputTypeSchemas/CategoryIncludeSchema'
import { CategoryWhereUniqueInputSchema } from '../inputTypeSchemas/CategoryWhereUniqueInputSchema'
import { CategoryCreateInputSchema } from '../inputTypeSchemas/CategoryCreateInputSchema'
import { CategoryUncheckedCreateInputSchema } from '../inputTypeSchemas/CategoryUncheckedCreateInputSchema'
import { CategoryUpdateInputSchema } from '../inputTypeSchemas/CategoryUpdateInputSchema'
import { CategoryUncheckedUpdateInputSchema } from '../inputTypeSchemas/CategoryUncheckedUpdateInputSchema'
import { CategoriesOnRestaurantsFindManyArgsSchema } from "../outputTypeSchemas/CategoriesOnRestaurantsFindManyArgsSchema"
import { CategoryCountOutputTypeArgsSchema } from "../outputTypeSchemas/CategoryCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CategorySelectSchema: z.ZodType<Prisma.CategorySelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  restaurants: z.union([z.boolean(),z.lazy(() => CategoriesOnRestaurantsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CategoryUpsertArgsSchema: z.ZodType<Prisma.CategoryUpsertArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereUniqueInputSchema,
  create: z.union([ CategoryCreateInputSchema,CategoryUncheckedCreateInputSchema ]),
  update: z.union([ CategoryUpdateInputSchema,CategoryUncheckedUpdateInputSchema ]),
}).strict() ;

export default CategoryUpsertArgsSchema;
