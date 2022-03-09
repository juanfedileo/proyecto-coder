import React, { useState } from 'react'
import ItemCount from './ItemCount'

const Item = (props) => {
    const [stock,setStock] = useState(props.stock)
  return (
    <div>
        <h4>{props.name}</h4>
        <img src={props.img} alt={props.name} />
        <h5>{props.cat.join(', ')}</h5>
        <h6>{'$ '+props.price.toLocaleString('es')}</h6>
        <ItemCount stock={stock} setStock={setStock}/>
    </div>
  )
}

export default Item