import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FaBars, FaSearch } from "react-icons/fa";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled past certain point (e.g., 100px)
      const scrolled = window.scrollY > 100;
      setIsSticky(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Navbar
      expand="lg"
      className={`navbar-container${isSticky ? " sticky" : ""}`}
      style={{
        backgroundColor: isSticky ? "rgba(137, 191, 80, 0.93)" : "transparent",
      }}
    >
      <div className="container-fluid">
        <Navbar.Brand href="#home">
          {isSticky ? (
            <img
              src={process.env.PUBLIC_URL + "/images/logo2.png"}
              alt="Thumbnail"
              className="logo"
            />
          ) : (
            <img
              src={process.env.PUBLIC_URL + "/logo.png"}
              alt="Thumbnail"
              className="logo"
            />
          )}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link
              href="#home"
              style={{
                color: isSticky ? "white" : "var(--egestam-mattsson, #89BF50)",
              }}
            >
              Hem
            </Nav.Link>
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
