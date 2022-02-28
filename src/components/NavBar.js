import {Navbar,Nav, Container} from 'react-bootstrap'

function Menu(){
    return (
      <Navbar bg="dark" variant="dark" id="main-header">
      <Container fluid id="header-container"> 
      <div>  
      <Navbar.Brand href="#home">Tienda surf</Navbar.Brand>
      </div>
      <div>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
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