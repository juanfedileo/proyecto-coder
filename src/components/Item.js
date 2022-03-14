import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import ItemCount from './ItemCount'

const Item = (props) => {
    const [stock,setStock] = useState(props.product.stock)
  return (  
    <Card border="info" style={{ width: '20rem'}}>
        <Card.Img variant="top" src={props.product.imagen} alt={props.product.name} />
        <Card.Body>
        <Card.Title>{props.product.name}</Card.Title>
        
        <Card.Text>{props.product.categor.join(', ')}</Card.Text>
        <Card.Text>{'$ '+props.product.price.toLocaleString('es')}</Card.Text>
        <ItemCount stock={stock} setStock={setStock}/>
        </Card.Body>
    </Card>
  )
}

export default Item