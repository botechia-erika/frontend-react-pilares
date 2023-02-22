import React from 'react';
import {Page, Card, MainCtn, SectionCtn, SectionTitle, AsideRight, Label, ArticleBox, FormContainer} from './styled'

import { Checkbox } from './../../../Components/Filter/checkbox';
import {dataProducts} from './../../../Data/dataProducts'
import { useState } from 'react';
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
   
  
  
     
  
      
         
  <AsideRight>
    {
            carrito.length >= 1 ? (
                carrito.map((cartProduct) => ( <
                    div key = { cartProduct.id } >
                            <SectionTitle>
        Minhas COMPRAS
   
</SectionTitle>  <
                    h5 > { cartProduct.name } < /h5>	 <
                    p > Quantidade: { cartProduct.quantity } < /p>	 <
                    p > Preco Total Item R$: < /p> <p>{cartProduct.quantity * cartProduct.price}</p >
                    <
                    button onClick = {
                        () => lessProduct(cartProduct)
                    } > Delete < /button>	 <
                    button onClick = {
                        () => addCart(cartProduct)
                    } > < i className = "fa-solid fa-cart-plus" > < /i>+1Produto</button >
                    <
                    hr / >
                    <
                    /div>	
                ))
            ) : ( <
               SectionTitle> Carrinho Vazio... < /SectionTitle>	
            )
        }

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
           
        <img src={product.img} alt="termo 1" />           
<h2>{product.name}</h2>
<ul>
<li><strong>Preco: </strong>R${product.price}</li>
<li>{product.description}
</li><li>
<strong>Cor: </strong>{product.color}</li>


<li>
  <span><strong>PP: {product.sizeInStock.pp}</strong></span>
  <span><strong>P: {product.sizeInStock.p}</strong></span>
  <span><strong>M: {product.sizeInStock.m}</strong></span>
  <span><strong>PP: {product.sizeInStock.g}</strong></span>
  <span><strong>P: {product.sizeInStock.gg}</strong></span>
  <span><strong>M: {product.sizeInStock.m}</strong></span>

</li>


</ul><
                button onClick = {
                    () => addCart(product)
                } > < i className = "fa-solid fa-cart-plus" > < /i>+1Produto</button >




    </ArticleBox>
)} 

          </SectionCtn>
  </MainCtn>
  </Page>


    );
  }