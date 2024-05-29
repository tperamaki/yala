import { Form, NumberField, TextField } from '@/components/Form';
import { addReview } from '@/services/review';

const ReviewPage = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <Form action={addReview} label="Add review">
        <TextField id="restaurant" label="Restaurant" name="restaurant" />
        <NumberField id="rating" label="Rating" name="rating" />
      </Form>
    </main>
  );
};

export default ReviewPage;
