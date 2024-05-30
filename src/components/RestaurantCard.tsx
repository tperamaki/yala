import { Category, Restaurant, Review } from '@/types/generated';
import Image from 'next/image';

type RestaurantCardProps = Restaurant & {
  categories: Category[];
  reviews: Review[];
};

const averageRating = (reviews: Review[]) => {
  return (
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
  );
};

const RestaurantCard = ({ name, reviews }: RestaurantCardProps) => {
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
        <span className="text-right text-xs">
          Rating: {averageRating(reviews) || 'N/A'}
        </span>
        <span className="text-right text-xs">Reviews: {reviews.length}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
