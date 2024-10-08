import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { CategoriesOnRestaurantsUpdateManyWithoutRestaurantNestedInputSchema } from './CategoriesOnRestaurantsUpdateManyWithoutRestaurantNestedInputSchema';
import { ReviewUpdateManyWithoutRestaurantNestedInputSchema } from './ReviewUpdateManyWithoutRestaurantNestedInputSchema';

export const RestaurantUpdateInputSchema: z.ZodType<Prisma.RestaurantUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  categories: z.lazy(() => CategoriesOnRestaurantsUpdateManyWithoutRestaurantNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUpdateManyWithoutRestaurantNestedInputSchema).optional()
}).strict();

export default RestaurantUpdateInputSchema;
