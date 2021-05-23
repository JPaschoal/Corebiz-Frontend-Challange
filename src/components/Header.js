import React from 'react';

import Logo from '../images/Logo.svg'
import Search from '../images/Search.svg'
import User from '../images/user.svg'
import Cart from '../images/shopping-cart.svg'

function Header() {
  return (
    <div className='headerContainer'>
      <div className='logoContainer'>
        <img 
          src={Logo} 
          alt='logo' 
        />
      </div>
      <div>
        <span className='searchWrapper'>
          <input 
            placeholder='O que está procurando?'
            className='searchInput'
          />
          <img 
            src={Search}  
            alt='' 
            className='searchIcon'
          />
        </span>
      </div>
      <div className='noName'>
        <div className='myAccountWrapper'>
          <img 
            src={User}
            alt='user'
            className='userIcon'
          />
          <span>Minha Conta</span>
        </div>
        <button className='cartBtn'>
          <div className='cartWrapper'>
            <img 
              src={Cart}
              alt='cart'
              className='cartIcon'
            />
            <span className='itemNumber' >1</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Header;