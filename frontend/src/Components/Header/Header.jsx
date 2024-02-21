import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FaBars, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar-container">
      <div className="container-fluid">
        <Navbar.Brand href="#home">
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            alt="Thumbnail"
            className="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Hem</Nav.Link>
            <Nav.Link href="#link">Hållbarhet</Nav.Link>
            <Nav.Link href="#link">Tjänster</Nav.Link>
            <Nav.Link href="#link">Nyheter</Nav.Link>
            <Nav.Link href="#link">Kontakt</Nav.Link>
            <Nav.Link href="#link">Jobba med oss</Nav.Link>
          </Nav>
          <Nav className="ml-auto align-items-center d-lg-none">
            <Nav.Link href="#search">
              <FaSearch />
            </Nav.Link>
            <Nav.Link href="#menu">
              <FaBars />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
