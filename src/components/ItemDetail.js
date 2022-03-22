import React, { useState } from 'react'
import ItemCount from './ItemCount';
import { Card } from 'react-bootstrap';

const ItemDetail = (props) => {

  const [stock,setStock] = useState(props.product.stock)

  const [ quantity, setQuantity ] = useState(0)
  const onAdd = (quantityToAdd) => {
    setQuantity(quantityToAdd)
    if (props.stock - quantityToAdd >=0)
        props.setStock(props.stock - quantityToAdd)
    // addItem(props.product, quantityToAdd)
    alert('El producto se añadió al carrito.')
}

  if (props.product.pid == 0)
    return <></>
  return (  
    <Card border="info" style={{ width: '30rem'}}>
        <Card.Img variant="top" src={`/${props.product.imagen}`} alt={props.product.name} />
        <Card.Body>
        <Card.Title>{props.product.name}</Card.Title>
        <p>Este es el detalle del producto particular</p>
        <Card.Text>{props.product.categor.join(', ')}</Card.Text>
        <Card.Text>{'$ '+props.product.price.toLocaleString('es')}</Card.Text>
        <ItemCount stock={stock} setStock={setStock} onAdd={onAdd}/>
        </Card.Body>
    </Card>
  )
}

export default ItemDetail