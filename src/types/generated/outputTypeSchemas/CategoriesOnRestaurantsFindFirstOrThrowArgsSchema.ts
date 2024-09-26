import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoriesOnRestaurantsIncludeSchema } from '../inputTypeSchemas/CategoriesOnRestaurantsIncludeSchema';
import { CategoriesOnRestaurantsWhereInputSchema } from '../inputTypeSchemas/CategoriesOnRestaurantsWhereInputSchema';
import { CategoriesOnRestaurantsOrderByWithRelationInputSchema } from '../inputTypeSchemas/CategoriesOnRestaurantsOrderByWithRelationInputSchema';
import { CategoriesOnRestaurantsWhereUniqueInputSchema } from '../inputTypeSchemas/CategoriesOnRestaurantsWhereUniqueInputSchema';
import { CategoriesOnRestaurantsScalarFieldEnumSchema } from '../inputTypeSchemas/CategoriesOnRestaurantsScalarFieldEnumSchema';
import { CategoryArgsSchema } from '../outputTypeSchemas/CategoryArgsSchema';
import { RestaurantArgsSchema } from '../outputTypeSchemas/RestaurantArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CategoriesOnRestaurantsSelectSchema: z.ZodType<Prisma.CategoriesOnRestaurantsSelect> =
  z
    .object({
      categoryId: z.boolean().optional(),
      restaurantId: z.boolean().optional(),
      assignedAt: z.boolean().optional(),
      assignedBy: z.boolean().optional(),
      category: z
        .union([z.boolean(), z.lazy(() => CategoryArgsSchema)])
        .optional(),
      restaurant: z
        .union([z.boolean(), z.lazy(() => RestaurantArgsSchema)])
        .optional(),
    })
    .strict();

export const CategoriesOnRestaurantsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CategoriesOnRestaurantsFindFirstOrThrowArgs> =
  z
    .object({
      select: CategoriesOnRestaurantsSelectSchema.optional(),
      include: CategoriesOnRestaurantsIncludeSchema.optional(),
      where: CategoriesOnRestaurantsWhereInputSchema.optional(),
      orderBy: z
        .union([
          CategoriesOnRestaurantsOrderByWithRelationInputSchema.array(),
          CategoriesOnRestaurantsOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: CategoriesOnRestaurantsWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          CategoriesOnRestaurantsScalarFieldEnumSchema,
          CategoriesOnRestaurantsScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export default CategoriesOnRestaurantsFindFirstOrThrowArgsSchema;
