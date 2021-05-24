import React, { useContext, useState } from 'react';

import '../styles/components/cartModal.css'

import { CartContext } from '../contexts/Cart'

function CartModal({ setOpen }) {

  const { itemsCart } = useContext(CartContext)
  const [cart] = itemsCart

  const getPrice= () => {
    const prices = cart.map(item => (item.price*item.qty))
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return prices.reduce(reducer)
  }

  return (
    <div className='modal'>
      <div className='modalWrapper'>
        <div className='cartHeader'>
          <h1>Carrinho</h1>
          <button onClick={() => {setOpen(false)}}>Fechar</button>
        </div>
        <div>
          {
            cart.length > 0 ? (
              cart.map(item => {
                return(
                  <div className='cartItem'>
                    <span>{item.productName}</span>
                    <span>{item.qty} Unidade</span>
                    <span>R$ {((item.price*item.qty)/100)}</span>
                  </div>
                )
              })
            ) : (
              <div>Carrinho vazio</div>
            )
          }
          <div className='total'>
            Total: R$ {(getPrice()/100)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartModal;