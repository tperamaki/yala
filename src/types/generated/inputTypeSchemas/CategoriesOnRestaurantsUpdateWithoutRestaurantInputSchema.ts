import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { CategoryUpdateOneRequiredWithoutRestaurantsNestedInputSchema } from './CategoryUpdateOneRequiredWithoutRestaurantsNestedInputSchema';

export const CategoriesOnRestaurantsUpdateWithoutRestaurantInputSchema: z.ZodType<Prisma.CategoriesOnRestaurantsUpdateWithoutRestaurantInput> = z.object({
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  assignedBy: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  category: z.lazy(() => CategoryUpdateOneRequiredWithoutRestaurantsNestedInputSchema).optional()
}).strict();

export default CategoriesOnRestaurantsUpdateWithoutRestaurantInputSchema;
