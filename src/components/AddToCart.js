import React, { useContext } from 'react';

import { CartContext } from '../contexts/Cart'

import '../styles/components/addToCart.css'

function AddToCart({ item }) {

  const { addToCart } = useContext(CartContext)

  
  const handleClick = () => {
    addToCart(item)
  }


  return (
    <button className='addCartBtn' onClick={() => handleClick()}>Comprar</button>
  );
}

export default AddToCart;