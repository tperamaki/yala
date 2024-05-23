const mockRestaurants = [
  {
    id: 1,
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
    id: 2,
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

export async function GET(request: Request) {
  return Response.json({ restaurants: mockRestaurants });
}
