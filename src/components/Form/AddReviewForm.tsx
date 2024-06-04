'use client';
import { addReview } from '@/services/review';
import Form from './Form';
import { z } from 'zod';
import { ReviewCreateInputSchema } from '@/types/generated';
import { NumberField, SelectField, SelectProps } from './FormField';
import { useFormState } from 'react-dom';
import { toast } from 'react-toastify';
import { redirect } from 'next/navigation';

type AddReviewFormProps = {
  restaurantOptions: SelectProps['options'];
};

type AddReviewFormState = {
  errors?: {
    [key in keyof z.infer<typeof ReviewCreateInputSchema>]?: string[];
  } & { send?: string[] };
} & z.infer<typeof ReviewCreateInputSchema>;

const initialState: AddReviewFormState = {
  restaurant: {
    connect: {
      id: 0,
    },
  },
  rating: 0,
};

const AddReviewForm = ({ restaurantOptions }: AddReviewFormProps) => {
  const myAddReview = async (
    prevState: AddReviewFormState,
    formData: FormData,
  ) => {
    const response = await addReview(prevState, formData);

    if (response.errors === undefined) {
      toast.success('Review added!');
      redirect('/restaurants');
    }

    if (
      response.errors &&
      'send' in response.errors &&
      response.errors.send !== undefined
    ) {
      toast.error('Failed to add review');
    }

    return response;
  };
  const [state, formAction] = useFormState(myAddReview, initialState);

  return (
    <Form action={formAction} label="Add review">
      <SelectField
        error={state.errors?.restaurant?.at(0)}
        id="restaurant"
        label="Restaurant"
        name="restaurant"
        options={restaurantOptions}
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
