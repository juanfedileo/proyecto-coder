import {Navbar,Nav, Container} from 'react-bootstrap'
import CartWidget from './CartWidget';
import {NavLink} from 'react-router-dom';

function Menu(){
    return (
      <Navbar bg="dark" variant="dark" id="main-header">
      <Container fluid id="header-container"> 
      <div>  
      <Navbar.Brand as={NavLink} to="/">Tienda surf</Navbar.Brand>
      </div>
      <div>
      <Nav className="me-auto">
        <Nav.Link as={NavLink} to="/categoria/Surf">Surf</Nav.Link>
        <Nav.Link as={NavLink} to="/categoria/Bodyboard">Bodyboard</Nav.Link>
        <div id="carrito">
        <CartWidget/>
        </div>
      </Nav>
      </div>
      </Container>
    </Navbar>
    )
}

export default Menu;