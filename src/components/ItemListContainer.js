import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CartWidget from './CartWidget'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import productsJson from './productsJson'
import Toast from 'react-bootstrap/Toast'

const Main = (props) => {

  const [products,setProducts] = useState([])
  const {categoryId} = useParams()
  var data
  
  

  useEffect( () => {
    

    const promesa = new Promise((res,rej) =>{
      setTimeout(()=>{
        if (categoryId != undefined)
          data = productsJson.products.filter(e => e.categor.includes(categoryId))
        else
          data = productsJson.products
        res(data)
      },2000)
    })

    promesa
      .then((respuestaDeLaApi)=>{
        setProducts(data)
      })
      .catch((errorDeLaApi) =>{
        <Toast>
          <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
            <strong className="me-auto">Error Api</strong>
          </Toast.Header>
          <Toast.Body>Error.</Toast.Body>
        </Toast>
      })

  },[categoryId])

  return (
    <main>
    
    <h2>Bienvenido {props.nombre} {props.apellido}!</h2>
    <ItemList products={products}/>
    </main>
  )
}

export default Main