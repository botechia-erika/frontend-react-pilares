import React from 'react';
export function CardProduct( {product}) {

return(

<div>
            <img src={product.img} alt="termo 1" />           
 <h2>{product.name}</h2>

<p><strong>Preco: </strong>{product.price}</p>
<p>{product.description}
</p><p>
<strong>Cor: </strong>{product.color}</p>

<p><strong>Tamanhos em STOCK: </strong></p>
</div>
)}