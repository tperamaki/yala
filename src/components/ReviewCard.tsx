import Image from 'next/image';
import { Review, Thumbsignal } from '@/types/generated';
import { sendThumbSignal } from '@/services/thumbsignal';

export type ReviewCardProps = {
  review: Review & {thumbsignals: Thumbsignal[]};
  isOwnReview: boolean;
};

const ReviewCard = ({ review, isOwnReview }: ReviewCardProps) => {
  const { rating, createdAt, comment, imageId } = review;

  return (
    <div className="mb-4 flex flex-col rounded-lg bg-stone-100 p-4 dark:bg-stone-800">
      <div className="flex items-center justify-between">
        <p className="font-semibold">
          {'⭐'.repeat(rating)} {rating}/5
        </p>

        <p className="mb-4 text-xs text-stone-700 dark:text-stone-300">
          {new Date(createdAt).toLocaleDateString()}
        </p>
      </div>

      {imageId?.length > 0 && (
        <div className="relative h-32">
          <Image
            className="object-cover"
            src={imageId}
            alt="placeholder2"
            fill
          />
        </div>
      )}

      {comment?.length > 0 ? (
        <p className="mt-2 text-stone-900 dark:text-stone-100">{comment}</p>
      ) : null}
      {isOwnReview && (
        <p className="mt-2 text-xs text-red-700 dark:text-red-300">
          Your review
        </p>
      )}
      {/* TODO: remember to change isOwnReview -> ! isOwnReview */}
      {isOwnReview && (
        <p className='mt-2'>
          <p>{review.thumbsignals.length}</p>
          <button
            className='mr-2'
            title="Vote thumbs up"
            onClick={ async () => { 
                const result = await sendThumbSignal("UP", review.restaurantId, review.createdBy) 
                if (!result) {
                  alert('fail')
                }
              }
            }>
            👍
          </button>
          <button
            title="Vote thumbs down"
            onClick={() => alert('Thumbs down!')}>
            👎
          </button>
        </p>
      )}
    </div>
  );
};

export default ReviewCard;
