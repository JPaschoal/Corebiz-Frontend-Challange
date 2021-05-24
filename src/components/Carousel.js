import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import '../styles/components/carousel.css'

import Banner from '../images/Banner.svg'
import Banner2 from '../images/Banner.svg'
import Banner3 from '../images/Banner.svg'
import BannerMob1 from '../images/BannerMob3.svg'
import BannerMob2 from '../images/BannerMob3.svg'
import BannerMob3 from '../images/BannerMob3.svg'

function Carosel() {
  return (
    <>
      <Carousel
        className='caroselDesk'
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
      <Carousel
        className='caroselMobile'
        showArrows={false}
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img src={BannerMob1} alt='' />
        </div>
        <div>
          <img src={BannerMob2} alt='' />
        </div>
        <div>
          <img src={BannerMob3} alt='' />
        </div>
      </Carousel>
    </>
  );
}

export default Carosel;