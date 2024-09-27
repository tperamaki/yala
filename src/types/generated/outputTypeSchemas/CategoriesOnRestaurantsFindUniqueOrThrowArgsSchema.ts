import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoriesOnRestaurantsIncludeSchema } from '../inputTypeSchemas/CategoriesOnRestaurantsIncludeSchema'
import { CategoriesOnRestaurantsWhereUniqueInputSchema } from '../inputTypeSchemas/CategoriesOnRestaurantsWhereUniqueInputSchema'
import { CategoryArgsSchema } from "../outputTypeSchemas/CategoryArgsSchema"
import { RestaurantArgsSchema } from "../outputTypeSchemas/RestaurantArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CategoriesOnRestaurantsSelectSchema: z.ZodType<Prisma.CategoriesOnRestaurantsSelect> = z.object({
  categoryId: z.boolean().optional(),
  restaurantId: z.boolean().optional(),
  assignedAt: z.boolean().optional(),
  assignedBy: z.boolean().optional(),
  category: z.union([z.boolean(),z.lazy(() => CategoryArgsSchema)]).optional(),
  restaurant: z.union([z.boolean(),z.lazy(() => RestaurantArgsSchema)]).optional(),
}).strict()

export const CategoriesOnRestaurantsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CategoriesOnRestaurantsFindUniqueOrThrowArgs> = z.object({
  select: CategoriesOnRestaurantsSelectSchema.optional(),
  include: CategoriesOnRestaurantsIncludeSchema.optional(),
  where: CategoriesOnRestaurantsWhereUniqueInputSchema,
}).strict() ;

export default CategoriesOnRestaurantsFindUniqueOrThrowArgsSchema;
