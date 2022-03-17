import React, { useEffect, useState } from 'react'
import productsJson from './productsJson';
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
const ItemDetailContainer = () => {

    const [product,setProduct] = useState({pid:0});
    const {itemId} = useParams()
    var data

    const getItem = (itemId) =>{
        new Promise((r)=>{setTimeout(()=>{r()},2000) } )
        .then(() => {
          if (itemId != undefined)
            data = productsJson.products.find(e => e.pid == itemId)
          setProduct(data) })
    }

    useEffect(() => {
        getItem(itemId)
    }, [itemId])

  return (
    <>
      
      <ItemDetail key={product.pid} product={product}/>
    </>
  )
}

export default ItemDetailContainer