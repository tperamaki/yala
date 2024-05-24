import type { RestaurantT } from '@/types/Restaurant';

const RestaurantCard = ({
  averageRating,
  amountOfReviews,
  name,
}: RestaurantT) => {
  return (
    <div className="flex bg-white mb-4 p-6 rounded-lg shadow-md">
      <div className="flex flex-col">
        <h2 className="text-lg">{name}</h2>
        <span className="text-xs">{averageRating}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
