import React, { useContext } from 'react';

import Logo from '../images/Logo.svg'
import Search from '../images/Search.svg'
import User from '../images/user.svg'
import Cart from '../images/shopping-cart.svg'

import { CartContext } from '../contexts/Cart'
import CartModal from './Cart';

function Header() {

  const { itemsCart, openCart } = useContext(CartContext)
  const [cart] = itemsCart
  const [open, setOpen] = openCart


  return (
    <header className='headerContainer'>
      <div className='logoContainer'>
        <img 
          src={Logo} 
          alt='logo' 
        />
      </div>
      <div className='searchContainer'>
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
        <button className='cartBtn' onClick={() => {setOpen(true)}}>
          <div className='cartWrapper'>
            <img 
              src={Cart}
              alt='cart'
              className='cartIcon'
            />
            <span className='itemNumber' >{cart.length}</span>
          </div>
        </button>
        {open && <CartModal setOpen={setOpen}/>}
      </div>
    </header>
  );
}

export default Header;