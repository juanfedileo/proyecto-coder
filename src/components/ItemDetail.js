import React, { useState } from 'react'
import ItemCount from './ItemCount';
import { Card } from 'react-bootstrap';

const ItemDetail = (props) => {

  const [stock,setStock] = useState(props.product.stock)
  return (  
    <Card border="info" style={{ width: '20rem'}}>
        <Card.Img variant="top" src={props.product.imagen} alt={props.product.name} />
        <Card.Body>
        <Card.Title>{props.product.name}</Card.Title>
        
        <Card.Text>{props.product.categor}</Card.Text>
        <Card.Text>{'$ '+props.product.price}</Card.Text>
        <ItemCount stock={stock} setStock={setStock}/>
        </Card.Body>
    </Card>
  )
}

export default ItemDetail