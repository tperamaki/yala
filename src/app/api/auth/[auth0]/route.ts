import { handleAuth } from '@auth0/nextjs-auth0';

/**
 * @swagger
 * /api/auth:
 *   get:
 *     description: Handles Auth0 authentication stuff
 */
export const GET = handleAuth();
