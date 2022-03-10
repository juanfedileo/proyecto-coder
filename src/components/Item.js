import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import ItemCount from './ItemCount'

const Item = (props) => {
    const [stock,setStock] = useState(props.stock)
  return (  
    <Card border="info" style={{ width: '20rem'}}>
        <Card.Img variant="top" src={props.img} alt={props.name} />
        <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        
        <Card.Text>{props.cat.join(', ')}</Card.Text>
        <Card.Text>{'$ '+props.price.toLocaleString('es')}</Card.Text>
        <ItemCount stock={stock} setStock={setStock}/>
        </Card.Body>
    </Card>
  )
}

export default Item