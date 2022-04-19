import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import {db} from './Firebase'
import { doc, getDoc } from 'firebase/firestore'
const ItemDetailContainer = () => {

    const [product,setProduct] = useState({pid:0});
    const {itemId} = useParams()

    useEffect(() => {
      if(product?.id !== itemId){
          const docRef = doc(db, 'products', itemId)
          getDoc(docRef)
              .then((data) => setProduct({id: data.id, ...data.data()}))
              .catch(error => console.log(error))
      }
  }, [itemId, product])

  return (
    <>
      
      <ItemDetail key={product.pid} product={product}/>
    </>
  )
}

export default ItemDetailContainer