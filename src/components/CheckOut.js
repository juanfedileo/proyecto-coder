import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'
import { useState, useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import 'firebase/firestore'
import { toast, Flip } from 'react-toastify';


const CheckOut = () => {
    const { cartItems } = useContext(CartContext)
    const [nombre, setNombre] = useState('')
    const [mail, setMail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [final, setFinal] = useState(false)

    var totalito=0;

    const db = getFirestore()
    const orders = collection(db,"orders")

    const total = (cart) => {
        //var total = 0;
        cart.forEach(item => {
            totalito += item.price * item.quantity;
        });
        return totalito;
    }

    const updateNombre = (e) => {
        setNombre(e.target.value)
    }

    const updateMail = (e) => {
        setMail(e.target.value)
    }

    const updateTelefono = (e) => {
        setTelefono(e.target.value)
    }

    const newOrder =  {
        name: nombre,
        email: mail,
        phonenumber: telefono,
        products: cartItems,
        total: total(cartItems)
    };

    const sendData = (e) => {
        
        console.log(newOrder)
        addDoc(orders,newOrder)
        .then(() => {
        })
        .catch(
            error => toast.error(error, { theme: "colored", transition: Flip })
        )
        .finally(() => {
            setFinal(true)
        })      
    }

    return (
        <div className='container-sm' id="orden">
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="name" placeholder="Ingresa nombre" onChange={updateNombre} required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ingresa email" onChange={updateMail} required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="value" placeholder="Ingresa telefono" onChange={updateTelefono} required/>
            </Form.Group>
            
            <Button variant="primary" onClick={sendData}>
                Terminar
            </Button>
            </Form>
        </div>

    )
}

export default CheckOut