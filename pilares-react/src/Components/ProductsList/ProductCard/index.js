import React from 'react';
import {ArticleBox} from './styled'    
export function CardProduct( {product}) {


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