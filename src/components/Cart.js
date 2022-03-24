import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'
import { Table, Button } from 'react-bootstrap'

const Cart = () => {

    let total = 0;
    const {cartItems, removeItem} = useContext(CartContext);

  return (
    <div className='container carrito'>
        <h2>Carrito de Compras</h2>
        <Table striped bordered hover>
            <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th>Acciones</th>
            </tr>
            {cartItems.map((p) => {
                total += p.price * p.cant;
                return (
                    <tr>
                        <td>
                            <Link to={`/item/${p.id}/`}> 
                                {p.name} 
                            </Link>
                        </td>
                        <td>{p.price.toLocaleString('es')}</td>
                        <td>{p.cant}</td>
                        <td>{(p.price * p.quantity)}</td>
                        <td>
                        <button onClick={() => { removeItem(p.id) }}>Eliminar</button><Link to={`/item/${p.id}/`}>Ver</Link>
                        </td>
                    </tr>
                )
                })}
            <tr>
                <th>TOTAL</th>
                <th>{total}</th>
                <th></th>
            </tr>
        </Table>
    </div>
  )
}

export default Cart