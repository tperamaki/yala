'use client';
import { useFormState } from 'react-dom';
import Form from './Form';
import { TextField } from './FormField';
import { addRestaurant } from '@/services/restaurants';
import { toast } from 'react-toastify';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { RestaurantCreateInputSchema } from '@/types/generated';

type RestaurantCreateInputSchemaT = z.infer<typeof RestaurantCreateInputSchema>;

type RestaurantFormState = {
  errors?: {
    [key in keyof RestaurantCreateInputSchemaT]?: string[];
  } & {
    send?: string[];
  };
} & RestaurantCreateInputSchemaT;

const initialState: RestaurantFormState = {
  name: '',
};

const AddRestaurantForm = () => {
  const [state, formAction] = useFormState(
    async (prevState: RestaurantFormState, formData: FormData) => {
      const response = await addRestaurant(prevState, formData);

      if (response.errors === undefined) {
        toast.success('Restaurant added!');
        redirect('/restaurants');
      }

      if (
        response.errors &&
        'send' in response.errors &&
        response.errors.send !== undefined
      ) {
        toast.error('Failed to add restaurant');
      }

      return response;
    },
    initialState,
  );

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
