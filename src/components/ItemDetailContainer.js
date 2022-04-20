import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import {db} from './Firebase'
import { doc, getDoc } from 'firebase/firestore'
import { toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from './Loading'

const ItemDetailContainer = () => {

    const [product,setProduct] = useState({pid:0});
    const [loading,setLoading] = useState(true)
    const {itemId} = useParams()

    useEffect(() => {
      if(product?.id !== itemId){
          const docRef = doc(db, 'products', itemId)
          getDoc(docRef)
              .then((data) => setProduct({id: data.id, ...data.data()}))
              .catch(error => toast.error(error, { theme: "colored", transition: Flip }))
              .finally(() => setLoading(false))
      }
  }, [itemId, product])

  if (loading) {
    return <Loading />
  }else{
  return (
    <>
      
      <ItemDetail key={product.pid} product={product}/>
    </>
  )
}
}

export default ItemDetailContainer