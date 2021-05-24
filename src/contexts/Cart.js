import React, { createContext, useState } from 'react';
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
    Cookies.set('cart', cart)
  }
  
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
