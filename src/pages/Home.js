import React from 'react';
import Header from '../components/Header';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Banner from '../images/Banner.svg'
import Banner2 from '../images/Banner.svg'
import Banner3 from '../images/Banner.svg'

import '../styles/components/header.css'
import Shelf from '../components/Shelf';

function Home() {
  return (
    <div className='homeContainer'>
      <Header />
      <Carousel
        showArrows={false}
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img src={Banner} alt='' />
        </div>
        <div>
          <img src={Banner2} alt='' />
        </div>
        <div>
          <img src={Banner3} alt='' />
        </div>
      </Carousel>
      <Shelf />
    </div>
  );
}

export default Home;