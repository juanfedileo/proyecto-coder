import React from 'react'
import {MdShoppingCart} from 'react-icons/md'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'

const CartWidget = () => {
  const cartItems = useContext(CartContext);
  const removeItem = useContext(CartContext);
  // const { cartItems, removeItem } = useContext(CartContext)
  return (
    <div>
      <Link to="/carrito/" className="button">
      <MdShoppingCart/>
      {/* {cartItems.map((p) => {
          return (
              <div className="item">
                  <button onClick={() => { removeItem(p.pid) }}>X</button>
                  <span>{p.name} ({p.quantity})</span>
                  <h4 className="price">{p.price.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</h4>
              </div>
          )
      })} */}
      </Link>
    </div>
  )
}

export default CartWidget