import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Main from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
    return (
        <>
            <NavBar />
            <section>
            <ItemDetailContainer/>
            </section>
            <Main nombre="Juan" apellido="Di Leo"/>
            <Footer/>
        </>
    );
}

export default App;