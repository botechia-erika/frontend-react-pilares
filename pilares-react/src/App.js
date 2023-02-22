import React from 'react';

import './App.css';

import {HeaderNav} from './Partials/HeaderNav'
import {Footer} from './Partials/Footer'
import { Products } from './Views/Store/Products/index';
import { Cart } from './Views/Store/Cart/index';
import { GlobalStyled } from './globalStyled.js';
import { useState } from'react'
import { NavButton } from './Partials/HeaderNav/styled';

function App() {
  const [carrito, setCarrito] = useState([]);

  const addCart = (product) => {
      if (carrito.some((productCart) => productCart.id === product.id)) {
          setCarrito(
              [...carrito].map((productCart) => {
                  if (productCart.id === product.id) {
                      productCart.quantity++;
                      return productCart;
                  }
                  return productCart;
              })
          );
      } else {
          console.log('el producto no esta en el carrito');
          setCarrito((currentState) => [
              ...currentState,
              {...product, quantity: 1 },
          ]);
      }
  };
  const lessProduct = (product) => {
      if (product.quantity <= 1) {
          setCarrito((currentState) => [...currentState].filter((cartProduct) => cartProduct.id != product.id));
      } else {
          setCarrito((currentState) => {
              console.log(currentState);
              return [...currentState].map((productCart) => {
                  if (productCart.id === product.id) {
                      console.log('me ejecuto una vez');
                      productCart.quantity -= 1;
                  }
                  return productCart;
              });
          });
      }
  };
const  [views, setViews] = useState(1)
const handleClick = ()=>{
  if(handleClick === 1){
    setViews(2)
    console.log(setViews)
  }
}

console.log(handleClick(1))
     return (

  <div>
    <GlobalStyled/>
 <HeaderNav/>
   {handleClick !== 1? <Products/> : <Cart/>}
   <Footer/>

</div>
  );
}

export default App;
