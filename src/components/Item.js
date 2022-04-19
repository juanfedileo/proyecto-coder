import React, { useState } from 'react'
import { Card ,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = (props) => {
    const [stock,setStock] = useState(props.product.stock)
  return (  
    <Card border="info" style={{ width: '20rem'}}>
        <Link to={`/item/${props.product.pid}/`}><Button variant="info" size="sm">Detalle</Button></Link>

        <Card.Img variant="top" src={`/${props.product.imagen}`} alt={props.product.name} />
        <Card.Body>
        <Card.Title>{props.product.name}</Card.Title>
        
        <Card.Text>{props.product.categor.join(', ')}</Card.Text>
        <Card.Text>{'$ '+props.product.price.toLocaleString('es')}</Card.Text>

        </Card.Body>
    </Card>
  )
}

export default Item