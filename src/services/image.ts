import { NextRequest } from 'next/server';
import { getSession } from '@auth0/nextjs-auth0';
import fs from "node:fs/promises";
import { nanoid } from 'nanoid'

export const saveImage = async (request: NextRequest) => {

  const session = await getSession();
  if (!session?.idToken) {
    throw new Error('Unauthorized');
  }

  const formData = await request.formData();
  const body = Object.fromEntries(formData);
  const file = (body.file as Blob) || null;

  if(file !== null) {
    const filename = (body.file as File).name;
    const extension = filename.slice(filename.lastIndexOf("."));
    const buffer = Buffer.from(await file.arrayBuffer());
    const id = nanoid();

    await fs.mkdir('./public/uploads/', { recursive: true });
    await fs.writeFile(`./public/uploads/img-${id}${extension}`, buffer);
    
    return {
      success: true,
      url: `/uploads/img-${id}${extension}`
    };
  }
  return {
    success: false,
    url: null
  };
};
