import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    require.resolve('react-widgets/styles.css'),
  ],
  plugins: [require('react-widgets-tailwind')],
};
export default config;
