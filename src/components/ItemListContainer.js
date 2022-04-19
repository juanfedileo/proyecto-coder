import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import {db} from './Firebase'
import { getDocs, collection, where, query } from 'firebase/firestore'
import { toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = (props) => {

  const [products,setProducts] = useState([])
  const {categoryId} = useParams()
  var data

  useEffect( () => {
    
    const productsCollection = collection(db, 'products')
    if (categoryId) {
      const miFiltro = query(productsCollection, where('categor', 'array-contains', categoryId))
      const documentos = getDocs(miFiltro)
      const aux=[];

      documentos
      .then( (respuesta) => {
        respuesta.forEach((documento) => {
          const producto = {
            pid : documento.id,
            ... documento.data()
          }
          aux.push(producto)
        })
        setProducts(aux)
      }
        )
      .catch( error => toast.error(error, { theme: "colored", transition: Flip }))
    }else{

      const documentos = getDocs(productsCollection)
      const aux=[];
  
      documentos
        .then((respuesta) => {
          respuesta.forEach((documento) => {
            const producto = {
              pid : documento.id,
              ... documento.data()
            }
            aux.push(producto)
          })
          setProducts(aux)
        })
        .catch(error => toast.error(error, { theme: "colored", transition: Flip }))
    }

  },[categoryId])

  return (
    <main>
    
    <h2>Bienvenido {props.nombre} {props.apellido}!</h2>
    <ItemList products={products}/>
    </main>
  )
}

export default Main