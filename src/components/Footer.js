import React from 'react';

import Contact from '../images/Contact.svg'
import logosFooter from '../images/LogosFooter.svg'

import '../styles/components/footer.css'
import Newsletter from './Newsletter';

function Footer() {
  return (
    <>
      <Newsletter />
      <footer className='footer'>
        <div className='footerContent'>
          <div className='companyInfo'>
            <span className='infoTitle'>Localização</span>
            <span className='line'></span>
            <span className='address'>Avenida Andrômeda, 2000. Bloco 6 e 8</span>
            <span className='city' >Alphavile SP</span>
            <span className='email'>brasil@corebiz.ag</span>
            <span className='phoneNumber' >+55 11 3090 1039</span>
          </div>
          <a href='/'>
            <img src={Contact} alt='' />
          </a>
          <a className='logoFooter' href='https://www.corebiz.ag' target='_blank' rel="noreferrer" >
            <img src={logosFooter} alt='' />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;