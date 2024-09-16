import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { RestaurantUpdateOneRequiredWithoutCategoriesNestedInputSchema } from './RestaurantUpdateOneRequiredWithoutCategoriesNestedInputSchema';

export const CategoriesOnRestaurantsUpdateWithoutCategoryInputSchema: z.ZodType<Prisma.CategoriesOnRestaurantsUpdateWithoutCategoryInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  assignedBy: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  restaurant: z.lazy(() => RestaurantUpdateOneRequiredWithoutCategoriesNestedInputSchema).optional()
}).strict();

export default CategoriesOnRestaurantsUpdateWithoutCategoryInputSchema;
