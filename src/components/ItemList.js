import React from 'react'
import Item from './Item'

const ItemList = (props) => {
  return (
    <>
        {props.products.map((p)=>{
            return <Item key={p.pid} product={p} />
        })}
    </>
  )
}

export default ItemList