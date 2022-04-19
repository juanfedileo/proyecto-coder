import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import Toast from 'react-bootstrap/Toast'
import {db} from './Firebase'
import { getDocs, collection, where, query } from 'firebase/firestore'

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
      .catch( error => console.log(error))
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
        .catch(()=>{<Toast>
          <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
            <strong className="me-auto">Error Api</strong>
          </Toast.Header>
          <Toast.Body>Error.</Toast.Body>
        </Toast>
        })
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