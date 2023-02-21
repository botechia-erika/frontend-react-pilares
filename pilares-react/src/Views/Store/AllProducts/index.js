import React from 'react';
import {Page, Card, MainCtn, SectionCtn, SectionTitle, AsideRight, Label, ArticleBox, FormContainer} from './styled'

import { Checkbox } from './../../../Components/Filter/checkbox';


export function AllProducts({img1}) {
img1="https://th.bing.com/th?id=OP.vupysievYvdBpw474C474&o=5&pid=21.1"
  const checkValue=1
    return (
      <div>
      <Page>  

      <MainCtn>
   
  
  
     
  
      
         
  <AsideRight>
    <FormContainer>
<Label>
<Checkbox
checkValue={checkValue}
/> 
<label htmlFor='{checkValue}'> 
CASA </label>

</Label>
<Label>
<Checkbox
checkValue={checkValue}
/> 
<label htmlFor='{checkValue}'> 
CASA </label>

</Label>
<Label>
<Checkbox
checkValue={checkValue}
/> 
<label htmlFor='{checkValue}'> 
CASA </label>

</Label>
<Label>
<Checkbox
checkValue={checkValue}
/> 
<label htmlFor='{checkValue}'> 
CASA </label>

</Label>

</FormContainer>
          </AsideRight> 
          <SectionCtn> 

            
            <SectionTitle>
              <h2>PRODUTOS
      </h2>


              </SectionTitle>
       
            <ArticleBox>
           
            <img src={img1} alt="termo 1" />           
 <h2 class="entrada-blog">Degrees 550ml</h2>
<ul>
<li><strong>Referencia: </strong>#01</li>
<li><strong>Material: </strong>Aço inoxidável

</li><li>
<strong>Cor: </strong>Verde</li>

<li><strong>Capacidade: </strong>550ml</li>

<li><strong>R$ 142.9</strong></li>


</ul>  <button class="btn-add" id="btn-add-1">Agregar em Carrinho</button>




        </ArticleBox>
        <ArticleBox>
           
           <img src={img1} alt="termo 1" />           
<h2 class="entrada-blog">Degrees 550ml</h2>
<ul>
<li><strong>Referencia: </strong>#01</li>
<li><strong>Material: </strong>Aço inoxidável

</li><li>
<strong>Cor: </strong>Verde</li>

<li><strong>Capacidade: </strong>550ml</li>

<li><strong>R$ 142.9</strong></li>


</ul>  <button class="btn-add" id="btn-add-1">Agregar em Carrinho</button>




       </ArticleBox>
       <ArticleBox>
           
           <img src={img1} alt="termo 1" />           
<h2 class="entrada-blog">Degrees 550ml</h2>
<ul>
<li><strong>Referencia: </strong>#01</li>
<li><strong>Material: </strong>Aço inoxidável

</li><li>
<strong>Cor: </strong>Verde</li>

<li><strong>Capacidade: </strong>550ml</li>

<li><strong>R$ 142.9</strong></li>


</ul>  <button class="btn-add" id="btn-add-1">Agregar em Carrinho</button>




       </ArticleBox>
       <ArticleBox>
           
           <img src={img1} alt="termo 1" />           
<h2 class="entrada-blog">Degrees 550ml</h2>
<ul>
<li><strong>Referencia: </strong>#01</li>
<li><strong>Material: </strong>Aço inoxidável

</li><li>
<strong>Cor: </strong>Verde</li>

<li><strong>Capacidade: </strong>550ml</li>

<li><strong>R$ 142.9</strong></li>


</ul>  <button class="btn-add" id="btn-add-1">Agregar em Carrinho</button>




       </ArticleBox>
       <ArticleBox>
           
           <img src={img1} alt="termo 1" />           
<h2 class="entrada-blog">Degrees 550ml</h2>
<ul>
<li><strong>Referencia: </strong>#01</li>
<li><strong>Material: </strong>Aço inoxidável

</li><li>
<strong>Cor: </strong>Verde</li>

<li><strong>Capacidade: </strong>550ml</li>

<li><strong>R$ 142.9</strong></li>


</ul>  <button class="btn-add" id="btn-add-1">Agregar em Carrinho</button>




       </ArticleBox>
        <ArticleBox>
           
            <img src={img1} alt="termo 1" />
    
 <h2 class="entrada-blog">Degrees 550ml</h2>
<ul>
<li><strong>Referencia: </strong>#01</li>
<li><strong>Material: </strong>Aço inoxidável

</li><li>
<strong>Cor: </strong>Verde</li>

<li><strong>Capacidade: </strong>550ml</li>

<li><strong>R$ 142.9</strong></li>


</ul>  <button class="btn-add" id="btn-add-1">Agregar em Carrinho</button>


        </ArticleBox>


          </SectionCtn>
  </MainCtn>
  </Page>
  </div>

    );
  }