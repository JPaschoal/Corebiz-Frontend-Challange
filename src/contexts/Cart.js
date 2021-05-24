import React, { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [open, setOpen] = useState(false)

  const add = (item) => {
    const exist = cart.find(cartItem => cartItem.productId === item.productId)
    if(exist) {
      setCart(cart.map(cartItem => 
        cartItem.productId === item.productId ? {...exist, qty: exist.qty + 1} : cartItem
        )
      )
    }
    else {
      setCart([...cart, {...item, qty: 1}])
    }
  }

  useEffect(() => {
    const cartCookie = Cookies.get('cart')
    
    if(cartCookie) {
      setCart(JSON.parse(cartCookie))
      console.log(cart)
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if(cart.length > 0) {
      Cookies.set('cart', [])
      Cookies.set('cart', JSON.stringify(cart))
    }
  }, [cart])
  
  return(
    <CartContext.Provider 
      value={{ 
        itemsCart: [cart, setCart], 
        addToCart: add,
        openCart: [open, setOpen]
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
