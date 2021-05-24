import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import api from '../services/api';
import ReactStars from "react-rating-stars-component";

import 'react-multi-carousel/lib/styles.css';
import '../styles/components/shelf.css'

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

  return (
    <div className='shelfWrapper'>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className='shelfTitle'>Mais Vendidos</div>
          <Carousel responsive={responsive}>
          {products.map((product) => {
            return(
              <a key={product.productId} href='/' className='productLink'>
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
            )
          })}
        </Carousel>
        </>
      )}
    </div>
  );
}

export default Shelf;