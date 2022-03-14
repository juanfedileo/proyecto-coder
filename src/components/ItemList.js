import React from 'react'
import Item from './Item'

const ItemList = (props) => {
  return (
    <>
        {props.products.map((p)=>{
            return <Item key={p.id} product={p} />
        })}
    </>
  )
}

export default ItemList