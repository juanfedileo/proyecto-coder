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
        {cartItems.length > 0 ? 
        <>
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
                total += p.price * p.quantity;
                return (
                    <tr>
                        <td>
                            <Link to={`/item/${p.id}/`}> 
                                {p.name} 
                            </Link>
                        </td>
                        <td>{p.price.toLocaleString('es')}</td>
                        <td>{p.quantity}</td>
                        <td>{(p.price * p.quantity)}</td>
                        <td>
                        <Button variant="outline-danger" onClick={() => { removeItem(p.id) }}>Eliminar</Button>{' '}<Link to={`/item/${p.id}/`}><Button variant="outline-info">Ver</Button></Link>
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
        <Link to="/orden-de-compra"><Button variant="primary">Terminar Compra</Button></Link>
        </>
        :
        <>
        <h3>No hay productos en el carrito</h3>
        <Link to="/"><Button variant="primary">Ir a la tienda</Button></Link>
        </>
        }
    </div> 
  )
}

export default Cart