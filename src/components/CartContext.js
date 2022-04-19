import React from 'react'
import { toast, Flip } from 'react-toastify'
import { useState, useEffect, createContext } from 'react'
import { Toast } from 'bootstrap'
import {db} from './Firebase'
import { getDocs, collection } from 'firebase/firestore'

export const CartContext = createContext()
const CartProvider = ({ children }) => {
    const { Provider } = CartContext
    const [ products, setProducts ] = useState([])
    const [ cartItems, setCartItems ] = useState([])
    const [ categories, setCategories ] = useState([])
    
    const clear = () => setCartItems([])
    const isInCartin = (array, itemId) => array.findIndex(e => e.id == itemId)
    const removeItem = (itemId) => setCartItems(cartItems.filter(p => p.pid != itemId))

    const addItem = (item, quantity) => {

      let _cartItems = cartItems.slice()
      let aux = isInCartin(_cartItems, item.id)
      if(aux != -1){
          _cartItems[isInCartin(_cartItems, item.id)].quantity += quantity
      }else{
          _cartItems.push(item)
          _cartItems[isInCartin(_cartItems, item.id)].quantity = quantity
      }
      setCartItems(_cartItems)
  }

    useEffect(() => {

      const productsCollection = collection(db, 'products')
      const documentos = getDocs(productsCollection)
      const aux=[];
  
      documentos
        .then((respuesta) => {
          respuesta.forEach((documento) => {
            const producto = {
              pid : documento.id,
              ... documento.data()
            }
            aux.push(producto)
          })
          setProducts(aux)
        })
        .catch(()=>{<Toast>
          <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
            <strong className="me-auto">Error Api</strong>
          </Toast.Header>
          <Toast.Body>Error.</Toast.Body>
        </Toast>
        }) 
    }, [])

  return (
    <Provider value={{categories, products, cartItems, addItem, removeItem, clear}}>
            {children}
    </Provider>
  )
}

export default CartProvider