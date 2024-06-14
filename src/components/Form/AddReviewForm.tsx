'use client';
import Form from './Form';
import { z } from 'zod';
import { ReviewCreateInputSchema } from '@/types/generated';
import { NumberField, SelectField } from './FormField';
import { addReviewAction } from '@/actions/addReview';
import { SelectProps } from '../Select';
import { useActionState } from 'react';

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
};

const AddReviewForm = (props: {
  restaurantOptions: SelectProps['options'];
}) => {
  const [state, formAction] = useActionState(addReviewAction, initialState);

  return (
    <Form action={formAction} label="Add review">
      <SelectField
        error={state.errors?.restaurant?.at(0)}
        id="restaurant"
        label="Restaurant"
        name="restaurant"
        options={props.restaurantOptions}
      />
      <NumberField
        error={state.errors?.rating?.at(0)}
        id="rating"
        label="Rating"
        name="rating"
      />
    </Form>
  );
};

export default AddReviewForm;
