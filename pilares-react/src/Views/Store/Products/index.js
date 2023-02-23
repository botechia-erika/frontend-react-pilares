import React from 'react';
import {Page, Card, MainCtn, SectionCtn, SectionTitle, AsideRight, Label, ArticleBox, FormContainer} from './styled'

import { Checkbox } from './../../../Components/Filter/checkbox';
import dataProducts from './../../../Data/dataProducts'
import { useState } from 'react';
import { CardProduct } from '../../../Components/ProductsList/ProductCard';

const productTotal = (a, b)=>{
  return a * b;
}
export function Products({img1}, {product}) {
img1="https://th.bing.com/th?id=OP.vupysievYvdBpw474C474&o=5&pid=21.1"
  const checkValue=1
  const [products , setProducts] = useState(dataProducts) 
 
 console.log(product)
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

  return (
    
      <Page>  

      <MainCtn>
   
  
  
     
  
      
         
  <AsideRight>         <SectionTitle>
        Minhas COMPRAS
   
</SectionTitle> 
<table>
  <thead>
    <tr>
      <th rowSpan="4">Produtos</th>
    </tr>
  </thead>
  <tbody>
  <tr>
                    <td>Produto </td>	
                    <td> Quantidade: </td>	 
                    <td>TOTAL </td>
                    <td colSpan="2">
                   EDITAR
                   </td>
      </tr>
    {
            carrito.length >= 1 ? (
        
                carrito.map((cartProduct) => ( <
                    tr key = { cartProduct.id } >
                    <td> { cartProduct.name } </td>	
                    <td> { cartProduct.quantity } </td>	 
                    <td>R$ {productTotal( cartProduct.quantity,  cartProduct.price)}</td>
                    <td>
                    <button onClick = {
                        () => lessProduct(cartProduct)
                    } >Deletar 1</button>
                    </td><td>	 <button onClick = {
                        () => addCart(cartProduct)
                    } > <i className = "fa-solid fa-cart-plus" > </i>+1</button >
                  </td></tr>
          
                ))
            ) : ( 
              <tr>
              <td Span="4">
               Carrinho Vazio... 
            </td>
               </tr>

               )
        }
        </tbody>
                  <tfoot>
                    <tr>
                      <td>TOTAL: 00</td>
                    </tr>
                  </tfoot>
                  </table>	
    <FormContainer>
                  <SectionTitle>
         FILTRAR BUSCA
   
</SectionTitle>
    <div class="formGroup">
					<label htmlFor="productName" class="form-label">Nome Produto:</label>
					<input type="text" id="productName" name="productName" placeholder="Camiseta Modelo" class="form-input"/>
				</div>
<Checkbox
checkValue={checkValue}
/> 

<Checkbox
checkValue={checkValue}
/> 


<Checkbox
checkValue={checkValue}
/> 

<Checkbox
checkValue={checkValue}
/> 


</FormContainer>
          </AsideRight> 
          <SectionCtn> 

<SectionTitle>
        PRODUTOS
   
</SectionTitle>

 {products.map(product=>
        <ArticleBox key={product.id}>
           
<CardProduct product={product}/>

<div>
  <span><strong>PP: {product.sizeInStock.pp}</strong></span>
  <span><strong>P: {product.sizeInStock.p}</strong></span>
  <span><strong>M: {product.sizeInStock.m}</strong></span>
  <span><strong>PP: {product.sizeInStock.g}</strong></span>
  <span><strong>P: {product.sizeInStock.gg}</strong></span>
  <span><strong>M: {product.sizeInStock.m}</strong></span>

</div><button onClick = {() => addCart(product)}>
  <i className = "fa-solid fa-cart-plus" > </i>+1Produto</button >




    </ArticleBox>
)} 

          </SectionCtn>
  </MainCtn>
  </Page>


    );
  }