import React, { useState } from 'react'
import ItemCount from './ItemCount';
import { Card } from 'react-bootstrap';

const ItemDetail = (props) => {

  const [stock,setStock] = useState(props.product.stock)

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
        <ItemCount stock={stock} setStock={setStock}/>
        </Card.Body>
    </Card>
  )
}

export default ItemDetail