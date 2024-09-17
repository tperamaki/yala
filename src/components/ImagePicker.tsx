'use client';
import { Suspense, useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';

export type ImagePickerProps = {
  disabled?: boolean;
  id: string;
  name: string;
  defaultValue: string;
};

const ImagePickerComponent = ({
  disabled = false,
  id,
  name,
  defaultValue,
}: ImagePickerProps) => {
  const [imageUrl, setImageUrl] = useState<string>(defaultValue);
  const [imageClicked, setImageClicked] = useState<boolean>(false);

  const onClick = () => {
    setImageClicked(true);
  };

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
          setImageClicked(false);
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

  // Show dropzone if image doesn't exist or is clicked.
  const dropZone =
    !imageUrl || imageClicked ? (
      <div
        {...getRootProps()}
        tabIndex={-1}
        className="flex h-32 flex-col items-center justify-center p-2 text-gray-600"
      >
        <input {...getInputProps()} />
        <p className="mb-2 text-center">
          Drag & drop image file here, or click to select file
        </p>
      </div>
    ) : null;

  // Show image if it exists and is not clicked.
  const image =
    imageUrl && !imageClicked ? (
      <div className="relative h-32" onClick={onClick}>
        <Image
          className="rounded-lg object-cover"
          src={imageUrl}
          alt="placeholder"
          fill
        />
      </div>
    ) : null;

  return (
    <div
      className="flex h-32 cursor-pointer flex-col rounded-md border-2 border-dashed border-gray-400"
      tabIndex={0}
    >
      {dropZone}
      {image}
      <input hidden type="text" id={id} name={name} value={imageUrl} readOnly />
    </div>
  );
};

export const ImagePicker = (props: ImagePickerProps) => {
  return (
    <Suspense
      fallback={
        <ImagePickerComponent
          disabled
          id={props.id}
          name={props.name}
          defaultValue={props.defaultValue}
        />
      }
    >
      <ImagePickerComponent {...props} />
    </Suspense>
  );
};

export default ImagePicker;
