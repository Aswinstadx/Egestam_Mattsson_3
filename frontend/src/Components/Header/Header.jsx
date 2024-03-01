import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FaBars, FaSearch } from "react-icons/fa";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isIpad, setIsIpad] = useState(false);
  const [navExpanded, setNavExpanded] = useState(false);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const headerStyle = {
    backgroundColor: navExpanded
      ? "#89BF50"
      : isSticky
      ? "rgba(137, 191, 80, 0.93)"
      : "transparent",
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsIpad(window.innerWidth <= 1024 && window.innerWidth >= 600); // Assuming iPad width is less than or equal to 768px
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
    <div>
      {!isIpad ? (
        <header>
          <Navbar
            expand="lg"
            className={`navbar-container${isSticky ? " sticky" : ""}`}
            style={{
              backgroundColor:
                isSticky || navExpanded
                  ? "rgba(137, 191, 80, 0.93)"
                  : "transparent",
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

              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className={`custom-toggler${navExpanded ? " open" : ""}`}
                onClick={() => setNavExpanded(!navExpanded)}
              >
                {!navExpanded ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <rect
                      x="12"
                      y="8.33008"
                      width="24"
                      height="2"
                      rx="1"
                      fill="white"
                    />
                    <rect
                      x="12"
                      y="15.4902"
                      width="24"
                      height="2"
                      rx="1"
                      fill="white"
                    />
                    <rect
                      x="12"
                      y="22.6401"
                      width="24"
                      height="2"
                      rx="1"
                      fill="white"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{ overflow: "auto", zIndex: "999" }}
                  >
                    <path
                      d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                      fill="white"
                    />
                  </svg>
                )}
              </Navbar.Toggle>
            </div>
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="full-width-collapse"
            >
              <Nav className="mx-auto">
                <Nav.Link
                  href="#home"
                  style={{
                    color: isSticky
                      ? "white"
                      : "var(--egestam-mattsson, #89BF50)",
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
            </Navbar.Collapse>
          </Navbar>
        </header>
      ) : (
        <>
          <nav
            className={`navbar-container${
              isSticky ? " sticky" : ""
            } navbar fixed-top`}
            style={{
              backgroundColor: isSticky
                ? "rgba(137, 191, 80, 0.93)"
                : "transparent",
            }}
          >
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <img
                  src={process.env.PUBLIC_URL + "/logo.png"}
                  alt="Thumbnail"
                  className="logo"
                />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
              >
                {/* <span class="navbar-toggler-icon"></span> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <rect
                    x="12"
                    y="8.33008"
                    width="24"
                    height="2"
                    rx="1"
                    fill="white"
                  />
                  <rect
                    x="12"
                    y="15.4902"
                    width="24"
                    height="2"
                    rx="1"
                    fill="white"
                  />
                  <rect
                    x="12"
                    y="15.4902"
                    width="24"
                    height="2"
                    rx="1"
                    fill="white"
                  />
                  <rect
                    x="12"
                    y="22.6401"
                    width="24"
                    height="2"
                    rx="1"
                    fill="white"
                  />
                </svg>
              </button>
              <div
                class="offcanvas offcanvas-top"
                tabindex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                style={{ background: "#89BF50" }}
              >
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="offcanvas-body">
                  <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        aria-current="page"
                        href="#"
                        style={{ color: "#00354E", fontWeight: 600 }}
                      >
                        Hem
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="#"
                        style={{ color: "#00354E", fontWeight: 600 }}
                      >
                        Hållbarhet
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="#"
                        style={{ color: "#00354E", fontWeight: 600 }}
                      >
                        Tjänster
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="#"
                        style={{ color: "#00354E", fontWeight: 600 }}
                      >
                        Nyheter
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="#"
                        style={{ color: "#00354E", fontWeight: 600 }}
                      >
                        Kontakt
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="#"
                        style={{ color: "#00354E", fontWeight: 600 }}
                      >
                        Jobba med oss
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </>
      )}
    </div>
  );
};

export default Header;
