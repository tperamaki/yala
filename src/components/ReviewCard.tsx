import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Review } from '@/types/generated';
import { getImageUrl } from '@/services/image';

const ReviewCard = ({
  review, isOwnReview
}: {review: Review, isOwnReview: boolean } ) => {

  const {
    rating,
    createdAt,
    comment,
    imageId,
  } = review;

  const [imageUrl, setImageUrl] = useState('/placeholder.jpg');

  useEffect(() => {
    if( imageId && imageId.length > 0 ) {

      const fetchData = async () => {
        try {
          const url = await getImageUrl(imageId);
          setImageUrl(url);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }
  }, [imageId]);

  return (
    <div className="mb-4 flex flex-col rounded-lg bg-stone-100 p-4 dark:bg-stone-800">
      <div className="flex items-center justify-between">
        <p className="font-semibold">RATING: {rating}</p>
        <p className="text-xs text-stone-700 dark:text-stone-300">
          {new Date(createdAt).toLocaleDateString()}
        </p>
      </div>
      {comment?.length > 0 ? (
        <p className="mt-2 text-stone-900 dark:text-stone-100">
          {comment}
        </p>
      ) : null}
      { isOwnReview && (
        <p className="mt-2 text-xs text-red-700 dark:text-red-300">
          Your review
        </p>
      ) }
      {imageUrl?.length > 0 ? (
        <div className="relative h-40">
          <Image
            className="rounded-t-lg object-cover"
            src={imageUrl}
            alt="placeholder"
            fill
          />
        </div>
      ) : null}
    </div>
  );
};

export default ReviewCard;
