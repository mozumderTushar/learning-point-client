import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Landing from '../Landing/Landing';
import Footer from '../../Shared/Footer/Footer';
import Faq from '../FAQ/Faq';

const Home = () => {
  return (
    <div>
      <Navigation />
      <Landing />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;