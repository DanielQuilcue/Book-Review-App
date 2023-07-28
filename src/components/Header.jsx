import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import avatar from '../assets/monstruo.png'

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="backgroundcolor">
      <Container>
        <Navbar.Brand href="#home">Book Review</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Titulo 1</Nav.Link>
            <Nav.Link href="#pricing">Titulo 2</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Perfil" id="collasible-nav-dropdown">
            <img
            src={avatar}
            height="30"
            className="d-inline-block align-top rounded-circle"
            alt="Avatar"
            loading="lazy"
          />
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Cerrar sesión
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
