import { decode } from 'jsonwebtoken';

export const getUserIdFromIdToken = (idToken: string): string => {
  const decodedToken = decode(idToken) ?? '';
  return typeof decodedToken === 'object'
    ? decodedToken.sub
    : JSON.parse(decodedToken).sub;
};
