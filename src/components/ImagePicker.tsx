'use client';
import { Suspense, useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone'
import Image from 'next/image';

export type ImagePickerProps = {
  disabled?: boolean;
  id: string;
  name: string;
  getImageUrl?: (id: string) => Promise<string>;
  setImage?: (file: File) => Promise<{id: string, url: string}>;
};

const ImagePickerComponent = ({
  disabled = false,
  id,
  name,
  getImageUrl,
  setImage,
}: ImagePickerProps) => {

  const [imageSrc, setImageSrc] = useState<string|null>(null);
  const [imageId, setImageId] = useState<string>("");

  const onDrop = useCallback((acceptedFiles: File[]) => {

    // TODO: Accept only image files.

    const file = acceptedFiles[0];
  
    const saveImage = async () => {
      try {

        if(typeof setImage !== 'undefined') {
          const result = await setImage(file);
          setImageId(result.id);
          setImageSrc(result.url);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    saveImage();

  }, []);

  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <>
      <div {...getRootProps()} className="border-2 border-dashed border-gray-300 rounded-md p-2 flex flex-col items-center justify-center text-gray-600 hover:bg-gray-50 border-gray-400 cursor-pointer transition duration-300">
        <input {...getInputProps()} />
        <p className="mb-2 text-center">Drag & drop image file here, or click to select file</p>
      </div>

      { imageSrc && (
          <div className="relative h-40">
          <Image
            className="rounded-t-lg object-cover"
            src={imageSrc}
            alt="placeholder"
            fill
          />
        </div>
      )}
      <input type="text" id={id} name={name} value={imageId} readOnly />
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
