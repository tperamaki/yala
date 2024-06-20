'use client';
import RestaurantList from '@/components/RestaurantList';
import { usePathname } from 'next/navigation';

const RestaurantsLayout = (props: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <main className="flex flex-row">
      <RestaurantList />
      {pathname !== '/restaurant' ? (
        <div className="ml-4 basis-1/3 bg-stone-300 dark:bg-stone-700">
          {props.children}
        </div>
      ) : null}
    </main>
  );
};

export default RestaurantsLayout;
