'use server';
import 'server-only';

export const addReview = (formData: FormData) => {
  console.log(
    'Review submitted',
    formData.get('restaurant'),
    formData.get('rating'),
  );
};
