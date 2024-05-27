import type { RestaurantT } from '@/types/Restaurant';
import Image from 'next/image';

const RestaurantCard = ({
  averageRating,
  amountOfReviews,
  name,
}: RestaurantT) => {
  return (
    <div className="bg-white dark:bg-black dark:color-white flex flex-col hover:cursor-pointer rounded-lg shadow-md dark:shadow-neutral-600">
      <div className="h-40 relative">
        <Image
          className="object-cover rounded-t-lg"
          src="/placeholder.jpg"
          alt="placeholder"
          fill
        />
      </div>
      <div className="flex flex-col p-4">
        <h2 className="text-lg">{name}</h2>
        <span className="text-right text-xs">Rating: {averageRating}</span>
        <span className="text-right text-xs">Reviews: {amountOfReviews}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
