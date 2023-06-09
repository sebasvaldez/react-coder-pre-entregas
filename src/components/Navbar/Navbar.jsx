import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavBarStyles.css";
import logo from "./assets/dog_lover_logo.png"
import { Link } from "react-router-dom";

import Cartwidget from "../Cartwidget/Cartwidget";

const NavBar = () => {
  return (
    <nav>
      <Navbar className="bg-navbar" expand="lg">
        <Container>
          <figure className="logo-png">
            <Link to='/'>
            <img src={logo} alt="" />
            </Link>
          </figure>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-white">
              <Link className="link text-white" to="/category/estetica">
                Estética e Higiene
              </Link>
              <Link className="link text-white" to="/category/accesorios">
                Accesorios
              </Link>

              <Link className="link text-white" to="/category/snacks">
                Snacks
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Cartwidget />
      </Navbar>
    </nav>
  );
};

export default NavBar;
