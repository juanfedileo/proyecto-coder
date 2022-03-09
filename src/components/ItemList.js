import React from 'react'
import Item from './Item'

const ItemList = (props) => {
  return (
    <>
        {props.products.map((p)=>{
            return <Item key={p.id} name={p.name} price={p.price} img={p.imagen} cat={p.categor} stock={p.stock} />
        })}
    </>
  )
}

export default ItemList