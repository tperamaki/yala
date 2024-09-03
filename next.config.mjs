/** @type {import('next').NextConfig} */

let nextConfig = {
  output: 'standalone',
};

let images = {};
if (process.env.AZURE_IMAGE_STORAGE === 'true') {
  // When using an external URL for images (Azure Blob Storage), it must be added to remotePatterns.
  images = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          port: '',
          hostname: process.env.AZURE_IMAGE_STORAGE_HOST,
          pathname: `/${process.env.AZURE_IMAGE_STORAGE_CONTAINER}/**`,
        },
      ],
    },
  };
}

nextConfig = {
  ...nextConfig,
  ...images,
};

export default nextConfig;
