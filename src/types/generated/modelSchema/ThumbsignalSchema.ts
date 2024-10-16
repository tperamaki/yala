import { z } from 'zod';

/////////////////////////////////////////
// THUMBSIGNAL SCHEMA
/////////////////////////////////////////

export const ThumbsignalSchema = z.object({
  reviewedRestaurantId: z.number().int(),
  reviewCreatedBy: z.string(),
  signalVariant: z.string(),
  createdAt: z.coerce.date(),
  createdBy: z.string(),
})

export type Thumbsignal = z.infer<typeof ThumbsignalSchema>

export default ThumbsignalSchema;
