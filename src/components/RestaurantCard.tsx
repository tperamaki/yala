import { EnrichedRestaurant } from '@/hooks/RestaurantHook';
import Image from 'next/image';
import Link from 'next/link';

const RestaurantCard = ({
  id,
  name,
  averageReview,
  reviewCount,
}: EnrichedRestaurant) => {
  return (
    <Link href={`/restaurant/${id}`}>
      <div className="dark:color-white flex flex-col rounded-lg bg-stone-100 shadow-md shadow-stone-300 hover:cursor-pointer dark:bg-stone-800 dark:shadow-stone-700">
        <div className="relative h-40">
          <Image
            className="rounded-t-lg object-cover"
            src="/placeholder.jpg"
            alt="placeholder"
            fill
          />
        </div>
        <div className="flex flex-col p-4">
          <h2 className="text-lg">{name}</h2>
          <span className="text-right text-xs">
            Rating: {averageReview || 'N/A'}
          </span>
          <span className="text-right text-xs">Reviews: {reviewCount}</span>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
