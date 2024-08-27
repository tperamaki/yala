'use client';
import Form from './Form';
import { z } from 'zod';
import { ReviewCreateInputSchema } from '@/types/generated';
import { NumberField, TextField, ImageField, SelectField } from './FormField';
import { useFormState } from 'react-dom';
import { addReviewAction } from '@/actions/addReview';
import { Option } from '../Select';

type InputType = Omit<z.infer<typeof ReviewCreateInputSchema>, 'createdBy'>;

export type AddReviewFormState = {
  errors?: {
    [key in keyof InputType]?: string[];
  } & { send?: string[] };
} & InputType;

const initialState: AddReviewFormState = {
  restaurant: {
    connect: {
      id: 0,
    },
  },
  rating: 0,
  comment: '',
  imageId: '',
};

const options: Option[] = [
  { key: 1, label: "⭐", value: 1 },
  { key: 2, label: "⭐⭐", value: 2 },
  { key: 3, label: "⭐⭐⭐", value: 3 },
  { key: 4, label: "⭐⭐⭐⭐", value: 4 },
  { key: 5, label: "⭐⭐⭐⭐⭐", value: 5 }
];

const AddReviewForm = (props: { restaurantId: number }) => {
  const [state, formAction] = useFormState(addReviewAction, initialState);

  return (
    <Form action={formAction} label="Add review">
      <input type="hidden" name="restaurantId" value={props.restaurantId} />

      <SelectField
        error={state.errors?.rating?.at(0)}
        id="rating"
        label="Rating"
        name="rating"
        options={options}
      />

      <TextField id="comment" label="Comment" name="comment" />
      <ImageField
        error={state.errors?.imageId?.at(0)}
        id="imageId"
        label="Image ID"
        name="imageId"
      />
    </Form>
  );
};

export default AddReviewForm;
