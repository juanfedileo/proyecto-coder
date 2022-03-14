import React, { useState } from 'react'
import ItemCount from './ItemCount';

const ItemDetail = (props) => {

    const [stock,setStock]=useState(props.productsJson.stock);
    

  return (
    <div>
            <img src={props.product.imagen} alt={props.product.name} />
            <div>
                <h5>{props.product.categor.join(', ')}</h5>
                <h4>{props.product.name}</h4>
                <h6>{'$ '+props.product.price.toLocaleString('es')}</h6>
                <ItemCount stock={stock} setStock={setStock} />
            </div>
    </div>
  )
}

export default ItemDetail