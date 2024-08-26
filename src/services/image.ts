import { nanoid } from 'nanoid'

const map = new Map();

export const getImageUrl = async (id: string) => {
  return map.get(id)
};

export const setImage = async (file: File) => {

  return new Promise<{id: string; url: string;}>((resolve, reject) => {

    const reader = new FileReader();

    reader.onabort = () => {
      reject('File reading was aborted');
    };
    reader.onerror = () => {
      reject('File reading has failed');
    };
    reader.onload = () => {

      const id = nanoid();
      const url = reader.result as string;
      map.set( id, url );
      resolve( { id, url } );
    };
    reader.readAsDataURL(file);
  });
};
