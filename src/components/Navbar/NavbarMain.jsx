import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBarStyles.css"


import Cartwidget from "../Cartwidget/Cartwidget";

const NavbarMain = () => {
  return (
    <nav>
      <Navbar className="bg-navbar" expand="lg" >
        <Container>
          <Navbar.Brand className="text-white" href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-white">
              <Nav.Link className="text-white" href="#category1">Categoría 1</Nav.Link>
              <Nav.Link className="text-white" href="#category2">Categoría 2</Nav.Link>
              <Nav.Link className="text-white" href="#category3">Categoría 3</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Cartwidget />
      </Navbar>
    </nav>
  );
};

export default NavbarMain;
