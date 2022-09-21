import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "./CartWidget";
import './CartWidget.css';
import logo from '../padron.PNG';
const NavBarTournaments = () => {
  return (
    <Navbar bg="blue" variant="blue">
      <Container >
        <Navbar.Brand href="#home" >
        <img src= {logo} />
        </Navbar.Brand>
        <Nav className="d-flex justify-content-between" >
          <Nav.Link href="#Home">Home</Nav.Link>
          <Nav.Link href="#Registration">Registration</Nav.Link>
          <Nav.Link href="#Events">Events</Nav.Link>
          <Nav.Link href="#Draws">Draws</Nav.Link>
        </Nav>
        <CartWidget/>
      </Container>
    </Navbar>

  )
}

export default NavBarTournaments;
