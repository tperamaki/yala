import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RestaurantIncludeSchema } from '../inputTypeSchemas/RestaurantIncludeSchema'
import { RestaurantWhereUniqueInputSchema } from '../inputTypeSchemas/RestaurantWhereUniqueInputSchema'
import { RestaurantCreateInputSchema } from '../inputTypeSchemas/RestaurantCreateInputSchema'
import { RestaurantUncheckedCreateInputSchema } from '../inputTypeSchemas/RestaurantUncheckedCreateInputSchema'
import { RestaurantUpdateInputSchema } from '../inputTypeSchemas/RestaurantUpdateInputSchema'
import { RestaurantUncheckedUpdateInputSchema } from '../inputTypeSchemas/RestaurantUncheckedUpdateInputSchema'
import { CategoriesOnRestaurantsFindManyArgsSchema } from "../outputTypeSchemas/CategoriesOnRestaurantsFindManyArgsSchema"
import { ReviewFindManyArgsSchema } from "../outputTypeSchemas/ReviewFindManyArgsSchema"
import { RestaurantCountOutputTypeArgsSchema } from "../outputTypeSchemas/RestaurantCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RestaurantSelectSchema: z.ZodType<Prisma.RestaurantSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  categories: z.union([z.boolean(),z.lazy(() => CategoriesOnRestaurantsFindManyArgsSchema)]).optional(),
  reviews: z.union([z.boolean(),z.lazy(() => ReviewFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RestaurantCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const RestaurantUpsertArgsSchema: z.ZodType<Prisma.RestaurantUpsertArgs> = z.object({
  select: RestaurantSelectSchema.optional(),
  include: RestaurantIncludeSchema.optional(),
  where: RestaurantWhereUniqueInputSchema,
  create: z.union([ RestaurantCreateInputSchema,RestaurantUncheckedCreateInputSchema ]),
  update: z.union([ RestaurantUpdateInputSchema,RestaurantUncheckedUpdateInputSchema ]),
}).strict() ;

export default RestaurantUpsertArgsSchema;
