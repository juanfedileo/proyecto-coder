import React, { useEffect } from 'react'
import {MdShoppingCart} from 'react-icons/md'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'

const CartWidget = () => {
  const cartItems = useContext(CartContext);
  const removeItem = useContext(CartContext);
  var aux;

  const cartTotal = () => {
    let total=0
    // cartItems.map(item => total += item.quantity)
    console.log(cartItems.cartItems.length)
    if(cartItems.cartItems.length == 0){
      total = 0
    }else{
      cartItems.cartItems.map(item => total += item.quantity)
    }
    return total
}
  
  useEffect(() => {
    aux = cartTotal()
    console.log(aux)
  }, [cartItems.cartItems.length])
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