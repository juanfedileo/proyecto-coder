import React, { useEffect, useState } from 'react'
import CartWidget from './CartWidget'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import productsJson from './productsJson'

const Main = (props) => {

  const [products,setProducts] = useState([])
  
  const getProducts = ()=>{
    new Promise((r)=> {setTimeout(()=> {r()}, 2000) })
      .then(()=>{setProducts(productsJson.products)})
  }

  useEffect(()=>{
    getProducts()
  },[])

  return (
    <main>
    
    <h2>Bienvenido {props.nombre} {props.apellido}!</h2>
    <ItemList products={products}/>
    </main>
  )
}

export default Main