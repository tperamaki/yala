'use client';
import { Suspense, useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone'
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

  const [imageUrl, setImageUrl] = useState<string>("");

  const onDrop = useCallback((acceptedFiles: File[]) => {

    if(acceptedFiles.length > 0) {
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

  const {getRootProps, getInputProps} = useDropzone({onDrop, accept: {'image/*': []}});

  return (
    <>
      { !imageUrl && (
        <div {...getRootProps()} className="h-24 border-2 border-dashed border-gray-300 rounded-md p-2 flex flex-col items-center justify-center text-gray-600 hover:bg-gray-50 border-gray-400 cursor-pointer transition duration-300">
          <input {...getInputProps()} />
          <p className="mb-2 text-center">Drag & drop image file here, or click to select file</p>
        </div>
      )}

      { imageUrl && (
          <div className="relative h-24">
          <Image
            className="rounded-t-lg object-cover"
            src={imageUrl}
            alt="placeholder"
            fill
          />
        </div>
      )}

      <input
        hidden
        type="text"
        id={id}
        name={name}
        value={imageUrl}
        readOnly
      />
    </>
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
        />
      }
    > 
      <ImagePickerComponent {...props} />
    </Suspense>
  );
};

export default ImagePicker;
