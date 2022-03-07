import React from 'react'
import {useState} from 'react'
import { ButtonToolbar, FormControl, InputGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

const ItemCount = (props) => {

  const [quantity, setQuantity] = useState(props.init)
  const addItem = () => {  if(quantity < props.stock) setQuantity(quantity + 1) }
  const subItem = () => {  if(quantity > 0) setQuantity(quantity - 1) }
  const addToCart = () => { props.onAdd(quantity); setQuantity(1) }
  return (
    <div>
        <div>
        <h4>{props.name}</h4>
        <p>{props.stock} stock</p>
            <div>
                <ButtonToolbar>
                <Button variant="info" onClick={subItem}>-</Button>
                <InputGroup>
                <FormControl type="text" value={quantity} readOnly />
                </InputGroup>
                <Button variant="info" onClick={addItem}>+</Button>
                </ButtonToolbar>
            </div>
            <Button variant="info" onClick={addToCart}>Agregar al carrito</Button>
        </div>
    </div>
  )
}

export default ItemCount