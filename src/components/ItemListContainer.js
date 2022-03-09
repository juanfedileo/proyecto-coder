import React, { useState } from 'react'
import CartWidget from './CartWidget'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

const Main = (props) => {

  const [products,setProducts] = useState([])
  
  const productsJson=[
    {
    "pid":1,
    "stock":3,
    "price":50000,
    "name":"Traje de neoprene",
    "categor":['Surf','Wetsuit'],
    "imagen":"./traje.png"
    },
    {
      "pid":2,
      "stock":7,
      "price":20000,
      "name":"Quillas",
      "categor":['Surf','fins'],
      "imagen":"./3dfins.jpg"
    },
    {
      "pid":3,
      "stock":11,
      "price":7000,
      "name":"Capucha",
      "categor":['Surf','Wetsuit'],
      "imagen":"./capucha.jpg"
    },
    {
      "pid":4,
      "stock":5,
      "price":10000,
      "name":"Patas de rana",
      "categor":['Bodyboard','fins'],
      "imagen":"./patas.png"
    },
    {
      "pid":5,
      "stock":2,
      "price":90000,
      "name":"Bodyboard",
      "categor":['Bodyboard','Board'],
      "imagen":"./tabla.png"
    }
    
  ]
  
  const getProducts = new Promise((r)=> {setTimeout(()=> {r()}, 200) })
      .then(()=>{setProducts(productsJson)})
  return (
    <main>
    
    <h2>Bienvenido {props.nombre} {props.apellido}!</h2>
    <ItemList products={products}/>
    </main>
  )
}

export default Main