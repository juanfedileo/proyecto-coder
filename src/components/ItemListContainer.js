import React, { useState } from 'react'
import CartWidget from './CartWidget'
import ItemCount from './ItemCount'

const Main = (props) => {
  const[stock,setStock]= useState(12)
  const addToCart = (added) => {
    if(stock - added >= 0)
        setStock(stock - added)
}
  return (
    <main>
    
    <h2>Bienvenido {props.nombre} {props.apellido}!</h2>
    <ItemCount name="producto" stock={stock} init={1} onAdd={addToCart}/>
    </main>
  )
}

export default Main