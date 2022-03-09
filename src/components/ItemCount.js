import React from 'react'
import {useState} from 'react'
import { ButtonToolbar, FormControl, InputGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

const ItemCount = (props) => {

  const [cant, setCant] = useState(1)
  const addItem = () => {  if(cant < props.stock) setCant(cant + 1) }
  const subItem = () => {  if(cant > 0) setCant(cant - 1) }
  const addToCart = () => {
     if (props.stock - cant >=0)
        props.setStock(props.stock - cant)
     setCant(1)
  }
  return (
    <div>
        <div>
        <h4>{props.name}</h4>
        <p>{props.stock} stock</p>
            <div>
                <ButtonToolbar>
                <Button variant="info" onClick={subItem}>-</Button>
                <InputGroup>
                <FormControl type="text" value={cant} readOnly />
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