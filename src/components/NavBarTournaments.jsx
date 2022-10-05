import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";
import logo from '../padron.PNG';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const NavBarTournaments = () => {
  return (
    <Navbar bg="blue" variant="blue">
      <Container >
        <Navbar.Brand as={Link} to='/'>
        <img src= {logo} />
        </Navbar.Brand>
        <Nav className="d-flex justify-content-between" >
          <Nav.Link as={Link} to='/'>
              Home
          </Nav.Link>
          <Nav.Link as={Link} to='/CategoryId'>Registration</Nav.Link>
          <Nav.Link as={Link} to='/category/M'>Category Male</Nav.Link>
          <Nav.Link as={Link} to='/category/F'>Category Female</Nav.Link>
          <Nav.Link as={Link} to='/Events'>Eventos</Nav.Link>
          <Nav.Link as={Link} to='/Draws'>Draws</Nav.Link>
          
        </Nav>
        
        <CartWidget/>
      </Container>
    </Navbar>

  )
}

export default NavBarTournaments;

// 6 y 7  
//import ItemListContainer from './components/ItemList/ItemListContainer';
//import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
// linea 20 <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenidos a mi tienda'} />} />
// linea 22 <Route path='/item/:id' element={<ItemDetailContainer />} />