import { z } from 'zod';

export const RestaurantScalarFieldEnumSchema = z.enum(['id','name','createdAt','createdBy']);

export default RestaurantScalarFieldEnumSchema;
