import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ReviewUpdateOneRequiredWithoutThumbsignalsNestedInputSchema } from './ReviewUpdateOneRequiredWithoutThumbsignalsNestedInputSchema';

export const ThumbsignalUpdateInputSchema: z.ZodType<Prisma.ThumbsignalUpdateInput> = z.object({
  signalVariant: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  review: z.lazy(() => ReviewUpdateOneRequiredWithoutThumbsignalsNestedInputSchema).optional()
}).strict();

export default ThumbsignalUpdateInputSchema;
