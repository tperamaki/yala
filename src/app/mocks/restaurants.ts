import type { RestaurantT } from '@/types/Restaurant';

const mockRestaurants: RestaurantT[] = [
  {
    id: 'f877d912-71b1-41ad-ba94-9cf62a3f26fe',
    name: 'Rax Pizzabuffet',
    category: 'pizza',
    description: 'All you can eat buffet with pizza etc.',
    address: 'Urho Kekkosen katu 1, 00100 Helsinki',
    createdAt: '2024-05-23',
    modifiedAt: null,
    createdBy: '2',
    modifiedBy: null,
    averageRating: 2,
    ratings: 1,
  },
  {
    id: '25a9867c-0c4c-493f-94f8-e0d93c6306db',
    name: 'Bruuveri',
    category: 'Home food',
    description: '',
    address: 'Fredrikinkatu 63 AB, 00100 Helsinki',
    createdAt: '2024-05-23',
    modifiedAt: null,
    createdBy: '2',
    modifiedBy: null,
    averageRating: 4,
    ratings: 1,
  },
];

export default mockRestaurants;
