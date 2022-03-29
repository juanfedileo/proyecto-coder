import React from 'react'
import {MdShoppingCart} from 'react-icons/md'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'

const CartWidget = () => {
  const cartItems = useContext(CartContext);
  const removeItem = useContext(CartContext);

  const cartTotal = () => {
    let total=0
    // cartItems.map(item => total += item.quantity)
    if(!cartItems.length){
      total = 0
    }else{
      cartItems.map(item => total += item.quantity)
    }
    return total
}
  // const { cartItems, removeItem } = useContext(CartContext)
  return (
    <div>
      <Link to="/carrito/" className="button">
      <MdShoppingCart/>
      <span>{cartTotal()}</span>
      {/* <span className="cart-items">{cartTotal()}</span> */}
      </Link>
    </div>
  )
}

export default CartWidget