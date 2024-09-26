import { z } from 'zod';

export const CategoryScalarFieldEnumSchema = z.enum(['id','name','createdAt','createdBy']);

export default CategoryScalarFieldEnumSchema;
