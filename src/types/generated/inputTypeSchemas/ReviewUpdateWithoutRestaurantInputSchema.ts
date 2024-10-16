import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { ThumbsignalUpdateManyWithoutReviewNestedInputSchema } from './ThumbsignalUpdateManyWithoutReviewNestedInputSchema';

export const ReviewUpdateWithoutRestaurantInputSchema: z.ZodType<Prisma.ReviewUpdateWithoutRestaurantInput> = z.object({
  rating: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  imageId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  thumbsignals: z.lazy(() => ThumbsignalUpdateManyWithoutReviewNestedInputSchema).optional()
}).strict();

export default ReviewUpdateWithoutRestaurantInputSchema;
