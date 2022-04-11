import React, { useEffect, useState } from 'react'
import productsJson from './productsJson';
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import {db} from './Firebase'
import { getDocs, doc, getDoc, collection, where, query } from 'firebase/firestore'
const ItemDetailContainer = () => {

    const [product,setProduct] = useState({pid:0});
    const {itemId} = useParams()
    var data
    

    /* const getItem2 = (itemId) =>{
      const productsCollection = collection(db, 'products')
      const miFiltro = query(productsCollection, where('id', '==', itemId))
      const documentos = getDocs(miFiltro)
      documentos
      .then( (respuesta)=>{
        setProduct(respuesta.docs.map(doc => doc.data()))
      })
      .catch( error => console.log(error))
    } */
      

    /* const getItem = (itemId) =>{
        new Promise((r)=>{setTimeout(()=>{r()},2000) } )
        .then(() => {
          if (itemId != undefined)
            data = productsJson.products.find(e => e.pid == itemId)
          setProduct(data) })
    } */

    /* useEffect(() => {
        //getItem(itemId)
        const productsCollection = collection(db, 'products')
        const miFiltro = query(productsCollection, where('id', '==', itemId))
        console.log(itemId)
        const documentos = getDocs(miFiltro)
        documentos
        .then( (respuesta)=>{
          console.log(respuesta.docs.map(doc => doc.data()))
          setProduct(respuesta.docs.map(doc => doc.data()))
        })
        .catch( error => console.log(error))
    }, [itemId]) */

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