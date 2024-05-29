import { addReview } from '@/services/review';

const ReviewPage = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <h2 className="text-center text-xl">Add review</h2>
      <form
        action={addReview}
        className="flex flex-col items-center justify-center gap-2 p-4"
      >
        <label htmlFor="restaurant">Restaurant</label>
        <input
          type="text"
          id="restaurant"
          name="restaurant"
          className="dark:focus:ring-slate max-w-md rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-gray-200 dark:border-slate-700 dark:text-slate-800"
        />
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          id="rating"
          name="rating"
          className="dark:focus:ring-slate max-w-md rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-gray-200 dark:border-slate-700 dark:text-slate-800"
        />
        <button
          type="submit"
          className="max-w-max rounded-md bg-red-100 p-2 dark:bg-red-900 dark:text-white"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default ReviewPage;
