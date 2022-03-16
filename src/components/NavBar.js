import {Navbar,Nav, Container} from 'react-bootstrap'
import CartWidget from './CartWidget';
import {Link,NavLink} from 'react-router-dom';

function Menu(){
    return (
      <Navbar bg="dark" variant="dark" id="main-header">
      <Container fluid id="header-container"> 
      <div>  
      <Navbar.Brand as={NavLink} to="/">Tienda surf</Navbar.Brand>
      </div>
      <div>
      <Nav className="me-auto">
        <Nav.Link as={NavLink} to="/categoria/">Surf</Nav.Link>
        <Nav.Link as={NavLink} to="/categoria/">Bodyboard</Nav.Link>
        <Nav.Link as={NavLink} to="/categoria/">Skate</Nav.Link>
        <Nav.Link as={NavLink} to="/carrito"><CartWidget/></Nav.Link>
      </Nav>
      </div>
      </Container>
    </Navbar>
    )
}

// function Menu() {
//     return (
//         <header id="main-header">
//             <h1>Titulo</h1>
//             <nav>
//                 <a href="#">links</a>
//                 <a href="#">links</a>
//                 <a href="#">links</a>
//             </nav>
//         </header>
//     )
// }

export default Menu;