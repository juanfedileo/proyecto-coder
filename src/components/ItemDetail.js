import React, { useState } from 'react'

const ItemDetail = (props) => {

    const [stock,setStock]=useState(props.productsJson.stock);
    

  return (
    <div>ItemDetail</div>
  )
}

export default ItemDetail