import { NextRequest } from 'next/server';
import { getSession } from '@auth0/nextjs-auth0';
import fs from 'node:fs/promises';
import { nanoid } from 'nanoid';
import {
  BlobServiceClient,
  ContainerClient,
  BlockBlobClient,
} from '@azure/storage-blob';

export const saveImage = async (request: NextRequest) => {
  const session = await getSession();
  if (!session?.idToken) {
    throw new Error('Unauthorized');
  }

  const formData = await request.formData();
  const body = Object.fromEntries(formData);
  const file = (body.file as Blob) || null;

  if (file !== null) {
    const filename = (body.file as File).name;
    const extension = filename.slice(filename.lastIndexOf('.'));
    const buffer = Buffer.from(await file.arrayBuffer());
    const id = nanoid();

    await fs.mkdir('./public/uploads/', { recursive: true });
    await fs.writeFile(`./public/uploads/img-${id}${extension}`, buffer);

    return {
      success: true,
      url: `/uploads/img-${id}${extension}`,
    };
  }
};

export const uploadImageToCloud = async (request: NextRequest) => {
  const session = await getSession();
  if (!session?.idToken) {
    throw new Error('Unauthorized');
  }

  const formData = await request.formData();
  const body = Object.fromEntries(formData);
  const file = (body.file as Blob) || null;

  if (file !== null) {
    const AZURE_IMAGE_STORAGE_CONNECTION_STRING =
      process.env.AZURE_IMAGE_STORAGE_CONNECTION_STRING || '';
    const AZURE_IMAGE_STORAGE_CONTAINER =
      process.env.AZURE_IMAGE_STORAGE_CONTAINER || '';

    const blobServiceClient = BlobServiceClient.fromConnectionString(
      AZURE_IMAGE_STORAGE_CONNECTION_STRING,
    );

    const containerClient: ContainerClient =
      blobServiceClient.getContainerClient(AZURE_IMAGE_STORAGE_CONTAINER);
    const createContainerResponse = await containerClient.createIfNotExists();

    const id = nanoid();
    const filename = (body.file as File).name;
    const extension = filename.slice(filename.lastIndexOf('.'));
    const blobName = `img-${id}${extension}`;

    const blockBlobClient: BlockBlobClient =
      containerClient.getBlockBlobClient(blobName);

    const arrayBuffer = await file.arrayBuffer();

    const options = {
      blobHTTPHeaders: { blobContentType: file.type },
    };

    const uploadBlobResponse = await blockBlobClient.upload(
      arrayBuffer,
      Buffer.byteLength(arrayBuffer),
      options,
    );

    return {
      success: true,
      url: blockBlobClient.url,
    };
  }

  return {
    success: false,
    url: null,
  };
};
