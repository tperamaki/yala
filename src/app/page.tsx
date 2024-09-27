import { permanentRedirect } from 'next/navigation';

const Home = ( ) => {
  permanentRedirect('/restaurant');
};

export default Home;
