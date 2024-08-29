'use client';
import { Suspense, useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';

export type ImagePickerProps = {
  disabled?: boolean;
  id: string;
  name: string;
};

const ImagePickerComponent = ({
  disabled = false,
  id,
  name,
}: ImagePickerProps) => {
  const [imageUrl, setImageUrl] = useState<string>('');

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const saveImage = async () => {
        try {
          const formData = new FormData();
          formData.append('file', file);

          const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
          });

          const data = await response.json();
          setImageUrl(data.url);
        } catch (error) {
          console.error('Error uploading file:', error);
        }
      };
      saveImage();
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
  });

  return (
    <>
      {!imageUrl && (
        <div
          {...getRootProps()}
          className="flex h-24 cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-gray-300 border-gray-400 p-2 text-gray-600 transition duration-300 hover:bg-gray-50"
        >
          <input {...getInputProps()} />
          <p className="mb-2 text-center">
            Drag & drop image file here, or click to select file
          </p>
        </div>
      )}

      {imageUrl && (
        <div className="relative h-24">
          <Image
            className="rounded-t-lg object-cover"
            src={imageUrl}
            alt="placeholder"
            fill
          />
        </div>
      )}

      <input hidden type="text" id={id} name={name} value={imageUrl} readOnly />
    </>
  );
};

export const ImagePicker = (props: ImagePickerProps) => {
  return (
    <Suspense
      fallback={
        <ImagePickerComponent disabled id={props.id} name={props.name} />
      }
    >
      <ImagePickerComponent {...props} />
    </Suspense>
  );
};

export default ImagePicker;
