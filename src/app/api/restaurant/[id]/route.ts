import { getRestaurant } from '@/services/restaurants';
import { NextResponse } from 'next/server';

type Params = {
  id: string;
};

export const GET = async (_request: Request, context: { params: Params }) => {
  return getRestaurant(parseInt(context.params.id, 10))
    .then(NextResponse.json)
    .catch((error) => {
      console.error(error);
      return NextResponse.error();
    });
};
