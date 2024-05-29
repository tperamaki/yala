import type { RestaurantT } from '@/types/Restaurant';
import Image from 'next/image';

type RestaurantCardProps = Pick<
  RestaurantT,
  'amountOfReviews' | 'averageRating' | 'name'
>;

const RestaurantCard = ({
  amountOfReviews,
  averageRating,
  name,
}: RestaurantCardProps) => {
  return (
    <div className="dark:color-white flex flex-col rounded-lg bg-white shadow-md hover:cursor-pointer dark:bg-black dark:shadow-neutral-600">
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
        <span className="text-right text-xs">Rating: {averageRating}</span>
        <span className="text-right text-xs">Reviews: {amountOfReviews}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
