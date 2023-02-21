import React from 'react';
import {Page, Card, MainCtn, SectionCtn, SectionTitle, AsideRight, Label, ArticleBox, FormContainer} from './styled'

import { Checkbox } from './../../../Components/Filter/checkbox';
import {dataProducts} from './../../../Data/dataProducts'
import { useState } from 'react';
export function Products({img1}, {product}) {
img1="https://th.bing.com/th?id=OP.vupysievYvdBpw474C474&o=5&pid=21.1"
  const checkValue=1

 


  return (
    
      <Page>  

      <MainCtn>
   
  
  
     
  
      
         
  <AsideRight>
    <FormContainer>

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
              <h2>PRODUTOS
      </h2>


              </SectionTitle>
       {dataProducts.map(product=>
            <ArticleBox key={product.id}>
           
            <img src={product.img} alt="termo 1" />           
 <h2>{product.name}</h2>
<ul>
<li><strong>Preco: </strong>{product.price}</li>
<li>{product.description}
</li><li>
<strong>Cor: </strong>{product.color}</li>

<li><strong>Capacidade: </strong>550ml</li>

<li><strong>R$ 142.9</strong></li>


</ul>  <button class="btn-add" id="btn-add-1">Agregar em Carrinho</button>




        </ArticleBox>
)}

          </SectionCtn>
  </MainCtn>
  </Page>


    );
  }