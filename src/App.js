import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Main from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import CartContext from './components/CartContext'
import Cart from './components/Cart';

function App() {
    return (
        <CartContext>
        <BrowserRouter>
            <NavBar />
            
            <section id="centro">
            <Routes>
                <Route path="/" element={<Main nombre="Juan" apellido="Di Leo"/>}/>
                <Route path="/categoria/:categoryId" element={<Main nombre="Juan" apellido="Di Leo"/>}/>
                <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
                <Route path="/carrito" element={<Cart />}/>
            </Routes>
            </section>
            <Footer/>
            <ToastContainer position="bottom-right" />
        </BrowserRouter>
        </CartContext>
    );
}

export default App;