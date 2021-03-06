import React from 'react'

import {useState} from 'react'
import { ButtonToolbar, FormControl, InputGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

const ItemCount = (props) => {

  const [cant, setCant] = useState(1)
  const addItem = () => {  if(cant < props.stock) setCant(cant + 1) }
  const subItem = () => {  if(cant > 1) setCant(cant - 1) }
  const addToCart = () => {
     props.onAdd(cant);
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
            <div id='botoncentrado'>   
            <Button variant="info" onClick={addToCart} >Agregar al carrito</Button>
            </div>
        </div>
    </div>
  )
}

export default ItemCount