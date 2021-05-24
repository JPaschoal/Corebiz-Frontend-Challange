import React from 'react';
import Header from '../components/Header';

import '../styles/components/header.css'
import Shelf from '../components/Shelf';
import Footer from '../components/Footer';
import Carosel from '../components/Carousel';

function Home() {

  return (
    <div className='homeContainer'>
      <Header />
      <Carosel />
      <Shelf />
      <Footer />
    </div>
  );
}

export default Home;