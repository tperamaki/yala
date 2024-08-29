import { NextRequest, NextResponse } from 'next/server';
import { saveImage } from '@/services/image';

export const POST = async (request: NextRequest) => {
  try {
    return NextResponse.json(await saveImage(request));
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};
