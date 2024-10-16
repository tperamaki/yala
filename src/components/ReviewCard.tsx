import Image from 'next/image';
import { Review, Thumbsignal } from '@/types/generated';
import { sendThumbSignal } from '@/services/thumbsignal';

export type ReviewCardProps = {
  review: Review & { thumbsignals: Thumbsignal[] };
  isOwnReview: boolean;
};

const ReviewCard = ({ review, isOwnReview }: ReviewCardProps) => {
  const { rating, createdAt, comment, imageId } = review;

  const thumbUps = review.thumbsignals.filter(
    (ts) => ts.signalVariant === 'UP',
  );
  const thumbDowns = review.thumbsignals.filter(
    (ts) => ts.signalVariant === 'DOWN',
  );

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
      {!isOwnReview && (
        <div className="mt-2">
          <button
            className="mr-2"
            title="Vote thumbs up"
            onClick={async () => {
              const result = await sendThumbSignal(
                'UP',
                review.restaurantId,
                review.createdBy,
              );
              if (!result) {
                alert('fail');
              }
            }}
          >
            👍 ({thumbUps.length})
          </button>
          <button
            title="Vote thumbs down"
            onClick={async () => {
              const result = await sendThumbSignal(
                'DOWN',
                review.restaurantId,
                review.createdBy,
              );
              if (!result) {
                alert('fail');
              }
            }}
          >
            👎 ({thumbDowns.length})
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
