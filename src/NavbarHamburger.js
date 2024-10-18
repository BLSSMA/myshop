 import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./NavbarHamburger.css";
import logo from "./images/logo.png";
import "bootstrap/dist/css/bootstrap.css";


const NavbarHamburger = () => {
    return(
    <div className="NavbarHamburger">
    <Navbar collapseOnSelect expand="md" className="d-lg-none navbarCollapse">
       <Navbar.Brand href="/">
        <img src={logo} alt="logo" className="d-lg-none img-fluid"/>
      </Navbar.Brand>             
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="Toggle"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav >
          <NavDropdown.Item href="/" className="NavDropdown">Home</NavDropdown.Item>
          <NavDropdown.Item href="/Shop" className="NavDropdown">Shop</NavDropdown.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
    )
}
export default NavbarHamburger;
