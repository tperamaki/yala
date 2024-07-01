import { EnrichedRestaurant } from '@/hooks/RestaurantHook';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const variant = {
  default: 'bg-stone-100 dark:bg-stone-900',
  active: 'bg-red-100 dark:bg-red-900',
};

const RestaurantCard = ({
  id,
  name,
  averageReview,
  reviewCount,
}: EnrichedRestaurant) => {
  const pathname = usePathname();
  return (
    <Link href={`/restaurant/${id}`}>
      <div
        className={
          (pathname === `/restaurant/${id}`
            ? variant.active
            : variant.default) +
          ' dark:color-white flex flex-col rounded-lg border-2 border-stone-700 shadow-md shadow-stone-300 hover:cursor-pointer hover:border-red-100 hover:bg-red-100 dark:shadow-stone-700 hover:dark:border-red-900 hover:dark:bg-red-900'
        }
      >
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
