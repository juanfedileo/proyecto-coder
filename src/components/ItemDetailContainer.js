import React, { useEffect, useState } from 'react'
import productsJson from './productsJson';
import ItemDetail from './ItemDetail'
const ItemDetailContainer = () => {

    const [product,setProduct]=useState({pid:0});
    const getItem = (item) =>{
        new Promise((r)=>{setTimeout(()=>{r()},2000) } )
        .then(()=>{setProduct(productsJson.products[item])})
    }

    useEffect(()=>{
        getItem(0)
    },[])

  return (
    <div>
        <ItemDetail key={product.pid} product={product} />
    </div>
  )
}

export default ItemDetailContainer