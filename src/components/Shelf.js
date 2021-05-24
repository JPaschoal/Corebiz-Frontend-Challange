import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import api from '../services/api';
import ReactStars from "react-rating-stars-component";

import 'react-multi-carousel/lib/styles.css';
import '../styles/components/shelf.css'

import AddToCart from './AddToCart';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

function Shelf() {

  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState()

  useEffect(() => {
    api.get('products')
    .then(response => {
      setProducts(response.data)
      setLoading(false)
    })
  }, [])

  const handleHoverEnter = (id) => {
    const element = document.querySelector(`.hover-${id}`)
    element.style.display = 'flex'
    
  }

  const handleHoverLeave = (id) => {
    const element = document.querySelector(`.hover-${id}`)
    element.style.display = 'none'
  }

  return (
    <div className='shelfWrapper'>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1 className='shelfTitle'>Mais Vendidos</h1>
          <Carousel responsive={responsive}>
          {products.map((product, index) => {
            return(
              <div className='productWrapper' key={product.productId} onMouseEnter={()  => handleHoverEnter(index)} onMouseLeave={()  => handleHoverLeave(index)}>
                <a href='/' className='productLink'>
                  <div className='imageWrapper'>
                    <img 
                      src={product.imageUrl}
                      alt={product.productName}
                      className='productImage'
                    />
                  </div>
                  <div className='productInfo'>
                    <div className='productName'>{product.productName}</div>
                    <div className='starsWrapper'>
                      <ReactStars
                        count={5}
                        edit={false}
                        value={product.stars}
                        activeColor='#F8475F'
                      />
                    </div>
                    <div className='listPrice'>{product.listPrice ? `R$ ${(product.listPrice/100)}` : ''}</div>
                    <div className='price'>por R$ {(product.price/100)}</div>
                    <div className='installments'>
                      {product.installments.length > 0 ? (
                        <div>ou em {product.installments[0].quantity} de R$ {(product.installments[0].value/100)}</div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                </a>
                <div className='buyBtn'>
                  <div className={`hover-${index} notHover buyButtonWrapper`}>
                    <AddToCart item={product} />
                  </div>
                </div>
              </div>
            )
          })}
        </Carousel>
        </>
      )}
    </div>
  );
}

export default Shelf;