'use client';
import { useFormState } from 'react-dom';
import Form from './Form';
import { FormRow, TextField } from './FormField';
import { z } from 'zod';
import { RestaurantCreateInputSchema } from '@/types/generated';
import { addRestaurantAction } from '@/actions/addRestaurant';
import { Multiselect } from 'react-widgets';
import { use, useState } from 'react';
import { Category } from '@prisma/client';

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

const AddRestaurantForm = ({
  getCategories,
}: {
  getCategories: Promise<Category[]>;
}) => {
  const [state, formAction] = useFormState(addRestaurantAction, initialState);
  const categoriesFetched = use(getCategories);
  const [categories, setCategories] = useState<string[]>(
    categoriesFetched.map((category) => category.name),
  );
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const addNewCategory = (category: string) => {
    const newCategory = category
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    setCategories([...categories, newCategory]);
    setSelectedCategories([...selectedCategories, newCategory]);
  };

  return (
    <Form action={formAction} label="Add restaurant">
      <TextField
        error={state.errors?.name?.at(0)}
        label="Name"
        id="name"
        name="name"
      />
      <input
        hidden
        name="categories"
        value={selectedCategories.join(',')}
        readOnly
      />
      <FormRow
        name="categories"
        error={state.errors?.categories?.at(0)}
        label="Categories"
      >
        <Multiselect
          id="categories"
          data={categories}
          allowCreate
          onCreate={addNewCategory}
          value={selectedCategories}
          onChange={(value) => setSelectedCategories(value)}
          className="text-stone-900"
        />
      </FormRow>
    </Form>
  );
};

export default AddRestaurantForm;
