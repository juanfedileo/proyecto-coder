import React from 'react'
import { toast, Flip } from 'react-toastify'
import { useState, useEffect, createContext } from 'react'
import { Toast } from 'bootstrap'
import productsJson from './productsJson'
import {db} from './Firebase'
import { getDocs, collection } from 'firebase/firestore'

export const CartContext = createContext()
const CartProvider = ({ children }) => {
    const { Provider } = CartContext
    const [ products, setProducts ] = useState([])
    const [ cartItems, setCartItems ] = useState([])
    const [ categories, setCategories ] = useState([])
    
    const clear = () => setCartItems([])
    const isInCartin = (array, itemId) => array.findIndex(e => e.pid == itemId)
    const isInCart = (array, item) => array.some(e => e.item === item)
    const removeItem = (itemId) => setCartItems(cartItems.filter(p => p.pid != itemId))
    // const addItem = (item, quantity) => {
    //     let _products = products.slice()
    //     let _cartItems = cartItems.slice()
    //     _products[isInCart(_products, item.pid)].stock -= quantity
    //     if(isInCart(_cartItems, item.pid) + 1)
    //     _cartItems[isInCart(_cartItems, item.pid)].quantity += quantity
    //     else{
    //         _cartItems.push(item)
    //         _cartItems[isInCart(_cartItems, item.pid)].quantity = quantity
    //     }
    //     setProducts(_products)
    //     setCartItems(_cartItems)
    // }

    const addItem = (item, quantity) => {
      let _products = products.slice()
      let _cartItems = cartItems.slice()
      if(isInCart(cartItems, item)){
          _cartItems = cartItems.find(p => p.item === item)
          _cartItems.quantity += quantity
          _products = [...cartItems]
      }else{
          _cartItems.push(item)
          _cartItems[isInCartin(_cartItems, item.pid)].quantity = quantity
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


        // var data
        // setTimeout(() => {
        //     const promesa = new Promise((res,rej) =>{
        //         setTimeout(()=>{
        //             data = productsJson.products
        //           res(data)
        //         },2000)
        //       })
          
        //       promesa
        //         .then((respuestaDeLaApi)=>{
        //           setProducts(data)
        //         })
        //         .catch((errorDeLaApi) =>{
        //           <Toast>
        //             <Toast.Header>
        //               <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        //               <strong className="me-auto">Error Api</strong>
        //             </Toast.Header>
        //             <Toast.Body>Error.</Toast.Body>
        //           </Toast>
        //         })
        // }, 2000)


    }, [])

  return (
    <Provider value={{categories, products, cartItems, addItem, removeItem, clear}}>
            {children}
    </Provider>
  )
}

export default CartProvider