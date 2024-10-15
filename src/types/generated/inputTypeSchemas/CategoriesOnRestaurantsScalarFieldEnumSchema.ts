import { z } from 'zod';

export const CategoriesOnRestaurantsScalarFieldEnumSchema = z.enum(['categoryId','restaurantId','assignedAt','assignedBy']);

export default CategoriesOnRestaurantsScalarFieldEnumSchema;
