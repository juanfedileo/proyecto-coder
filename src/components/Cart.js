import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'
import { Table } from 'react-bootstrap'

const Cart = () => {

    let total = 0;
    const {cartItems, removeItem} = useContext(CartContext);
    console.log(cartItems);

  return (
    <div className='container carrito'>
        <h2>Carrito de Compras</h2>
        <Table striped bordered hover>
        <thead>
            <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
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
        </tbody>
        <tfoot>
            <tr>
                <th>TOTAL</th>
                <th>{total}</th>
                <th></th>
            </tr>
        </tfoot>
        </Table>
    </div>
  )
}

export default Cart