import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Main from './components/ItemListContainer';

function App() {
    return (
        <>
            <NavBar />
            <Main nombre="Juan" apellido="Di Leo"/>
            <Footer/>
        </>
    );
}

export default App;