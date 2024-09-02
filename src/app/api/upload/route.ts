import { NextRequest, NextResponse } from 'next/server';
import { saveImage, uploadImageToCloud } from '@/services/image';

export const POST = async (request: NextRequest) => {
  try {
    if (process.env.AZURE_IMAGE_STORAGE === 'true') {
      return NextResponse.json(await uploadImageToCloud(request));
    }
    return NextResponse.json(await saveImage(request));
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};
