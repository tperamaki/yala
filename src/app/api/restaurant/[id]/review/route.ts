import { getReviews } from '@/services/review';
import { NextResponse } from 'next/server';

type Params = {
  id: string;
};

export const GET = async (_request: Request, context: { params: Params }) => {
  return getReviews(parseInt(context.params.id, 10))
    .then(NextResponse.json)
    .catch((error) => {
      console.error(error);
      return NextResponse.error();
    });
};
