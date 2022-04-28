import React, { useState ,useContext} from 'react'
import { CartContext } from './CartContext';
import {Link} from 'react-router-dom'
import ItemCount from './ItemCount';
import { Card, Button } from 'react-bootstrap';
import { toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ItemDetail = (props) => {

  const [stock,setStock] = useState(props.product.stock)

  const [ cant, setCant ] = useState(0)

  const { addItem } = useContext(CartContext)

  const onAdd = (quantityToAdd) => {
    setCant(quantityToAdd)
    addItem(props.product, quantityToAdd)
    if (props.stock - quantityToAdd >=0)
        props.setStock(props.stock - quantityToAdd)
    toast.success('El producto se añadió al carrito.', { theme: "colored", transition: Flip })
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
        {cant ? <Link to="/carrito"><Button variant="primary">Terminar mi compra</Button></Link> : <ItemCount stock={stock} setStock={setStock} onAdd={onAdd}/>}
        </Card.Body>
    </Card>
  )
}
export default ItemDetail