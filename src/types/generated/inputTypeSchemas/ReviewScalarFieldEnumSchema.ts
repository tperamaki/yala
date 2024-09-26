import { z } from 'zod';

export const ReviewScalarFieldEnumSchema = z.enum(['restaurantId','rating','createdAt','createdBy','comment','imageId']);

export default ReviewScalarFieldEnumSchema;
