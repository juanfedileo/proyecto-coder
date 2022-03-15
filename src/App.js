import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Main from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
    return (
        <>
            <NavBar />
            <Main nombre="Juan" apellido="Di Leo"/>
            <section>
            <ItemDetailContainer/>
            </section>
            <Footer/>
        </>
    );
}

export default App;