import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Main from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        
        <BrowserRouter>
            <NavBar />
            
            <section id="centro">
            <Routes>
                <Route path="/" element={<Main nombre="Juan" apellido="Di Leo"/>}/>
                <Route path="/categoria/:categoryId" element={<ItemDetailContainer/>}/>
                <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
                <Route path="/carrito" element={<div>carrito</div>}/>
            </Routes>
            </section>
            <Footer/>
        </BrowserRouter>
        
    );
}

export default App;