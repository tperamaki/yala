import { addReview } from '@/services/review';

const ReviewPage = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <h2 className="text-xl text-center">Add review</h2>
      <form
        action={addReview}
        className="flex flex-col p-4 gap-2 justify-center items-center"
      >
        <label htmlFor="restaurant">Restaurant</label>
        <input
          type="text"
          id="restaurant"
          name="restaurant"
          className="max-w-md dark:text-slate-800 p-2 rounded-md border border-gray-300 dark:border-slate-700 focus:ring-2 focus:ring-gray-200 dark:focus:ring-slate"
        />
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          id="rating"
          name="rating"
          className="max-w-md dark:text-slate-800 p-2 rounded-md border border-gray-300 dark:border-slate-700 focus:ring-2 focus:ring-gray-200 dark:focus:ring-slate"
        />
        <button
          type="submit"
          className="p-2 bg-red-100 dark:bg-red-900 dark:text-white rounded-md max-w-max"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default ReviewPage;
