import { addReview } from '@/services/review';
import { toast } from 'react-toastify';
import { redirect } from 'next/navigation';
import { AddReviewFormState } from '@/components/Form/AddReviewForm';

export const addReviewAction = async (
  prevState: AddReviewFormState,
  formData: FormData,
) => {
  const response = await addReview(prevState, formData);

  if (response.errors === undefined) {
    toast.success('Review added!');
    redirect('/restaurant');
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
