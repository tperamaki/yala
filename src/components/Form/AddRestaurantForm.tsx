'use client';
import Form from './Form';
import { TextField } from './FormField';
import { z } from 'zod';
import { RestaurantCreateInputSchema } from '@/types/generated';
import { addRestaurantAction } from '@/actions/addRestaurant';
import { useActionState } from 'react';

type InputType = Omit<z.infer<typeof RestaurantCreateInputSchema>, 'createdBy'>;

export type RestaurantFormState = {
  errors?: {
    [key in keyof InputType]?: string[];
  } & {
    send?: string[];
  };
} & InputType;

const initialState: RestaurantFormState = {
  name: '',
};

const AddRestaurantForm = () => {
  const [state, formAction] = useActionState(addRestaurantAction, initialState);

  return (
    <Form action={formAction} label="Add restaurant">
      <TextField
        error={state.errors?.name?.at(0)}
        label="Name"
        id="name"
        name="name"
      />
    </Form>
  );
};

export default AddRestaurantForm;
