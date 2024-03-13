import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FaBars, FaSearch } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isIpad, setIsIpad] = useState(false);
  const [navExpanded, setNavExpanded] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);

  const location = useLocation();
  const { pathname } = location;

  // Define a function to determine if a given path is active
  const isActive = (path) => {
    // return pathname.includes(path);
    // return pathname == path;
    return pathname.startsWith(path);
  };

  const isActive2 = (path) => {
    return pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          {console.log("header-1")}
          <Navbar
            expand="lg"
            className={`navbar-container${isSticky ? " sticky" : ""}`}
            style={{
              backgroundColor:
                isSticky || navExpanded ? "#89BF50" : "transparent",

              zIndex: 1, // Adjust the z-index as needed
            }}
          >
            <div className="container-fluid">
              <Navbar.Brand href="/">
                {isSticky ? (
                  <img
                    src={process.env.PUBLIC_URL + "/images/logo3.png"}
                    alt="Thumbnail"
                    className="logo"
                  />
                ) : (
                  <>
                    {!navExpanded ? (
                      <>
                        <img
                          src={process.env.PUBLIC_URL + "/logo.png"}
                          alt="Thumbnail"
                          className="logo"
                        />
                      </>
                    ) : (
                      <>
                        <img
                          src={process.env.PUBLIC_URL + "/images/logo3.png"}
                          alt="Thumbnail"
                          className="logo"
                        />
                      </>
                    )}
                  </>
                )}
              </Navbar.Brand>
              {/* {isSticky && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    left: "113px",
                    top: "-2px",
                    position: "relative",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.8487 17.3729 13.551 16.3199 14.9056L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L14.9056 16.3199C13.551 17.3729 11.8487 18 10 18C5.58172 18 2 14.4183 2 10Z"
                      fill="white"
                    />
                  </svg>
                </div>
              )} */}
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
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      className="hamber_ic"
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{
                        overflow: "auto",
                        zIndex: "999",
                        display: scrollPosition > 100 ? "none" : "block",
                      }}
                      className="close__btn"
                    >
                      <path
                        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                        fill="white"
                      />
                    </svg>
                  </span>
                )}
              </Navbar.Toggle>
            </div>
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="full-width-collapse"
            >
              {/* {!isSticky && (
                <>
                  <span
                    style={{ float: "right" }}
                    className="mobile-only d-block d-sm-none close_btn"
                    onClick={() => setNavExpanded(!navExpanded)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="20"
                      viewBox="0 0 19 20"
                      fill="none"
                    >
                      <path
                        d="M11.6137 10L17.623 3.99063L18.8623 2.75137C19.0451 2.56855 19.0451 2.27148 18.8623 2.08867L17.5363 0.762695C17.3535 0.579883 17.0564 0.579883 16.8736 0.762695L9.625 8.01133L2.37637 0.762109C2.19355 0.579297 1.89648 0.579297 1.71367 0.762109L0.387109 2.08809C0.204297 2.2709 0.204297 2.56797 0.387109 2.75078L7.63633 10L0.387109 17.2486C0.204297 17.4314 0.204297 17.7285 0.387109 17.9113L1.71309 19.2373C1.8959 19.4201 2.19297 19.4201 2.37578 19.2373L9.625 11.9887L15.6344 17.998L16.8736 19.2373C17.0564 19.4201 17.3535 19.4201 17.5363 19.2373L18.8623 17.9113C19.0451 17.7285 19.0451 17.4314 18.8623 17.2486L11.6137 10Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </>
              )} */}
              <Nav className="mx-auto">
                <div
                  className="mobile-nav-link"
                  style={{ left: "22px", position: "relative" }}
                />
                <Nav.Link
                  href="/"
                  // style={{
                  //   color: isSticky
                  //     ? "white"
                  //     : "var(--egestam-mattsson, #89BF50)",
                  // }}
                  // className="mobile-nav-link "
                  // className={isActive("/") ? "active" : "" }
                  className={`mobile-nav-link ${
                    isActive("/") && isActive2('/') ? "active" : "inactive"
                  }`}
                >
                  Hem
                  <span
                    style={{ float: "right" }}
                    className="mobile-only d-block d-sm-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="17"
                      viewBox="0 0 8 17"
                      fill="none"
                    >
                      <path
                        d="M0.547594 1.93944L0.326625 2.16038C0.180188 2.30682 0.180188 2.54425 0.326625 2.69072L6.43578 8.79991L0.326625 14.9091C0.180188 15.0555 0.180188 15.293 0.326625 15.4394L0.547594 15.6604C0.694031 15.8068 0.931469 15.8068 1.07791 15.6604L7.67325 9.06507C7.81969 8.91863 7.81969 8.68119 7.67325 8.53472L1.07791 1.93944C0.931469 1.79297 0.694031 1.79297 0.547594 1.93944Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </Nav.Link>
                <Nav.Link
                  href="/sustainability"
                  className={`mobile-nav-link ${
                    isActive("/sustainability") ? "active" : ""
                  }`}
                >
                  Hållbarhet
                  <span
                    style={{ float: "right" }}
                    className="mobile-only d-block d-sm-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="17"
                      viewBox="0 0 8 17"
                      fill="none"
                    >
                      <path
                        d="M0.547594 1.93944L0.326625 2.16038C0.180188 2.30682 0.180188 2.54425 0.326625 2.69072L6.43578 8.79991L0.326625 14.9091C0.180188 15.0555 0.180188 15.293 0.326625 15.4394L0.547594 15.6604C0.694031 15.8068 0.931469 15.8068 1.07791 15.6604L7.67325 9.06507C7.81969 8.91863 7.81969 8.68119 7.67325 8.53472L1.07791 1.93944C0.931469 1.79297 0.694031 1.79297 0.547594 1.93944Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </Nav.Link>
                <Nav.Link
                  href="/services"
                  className={`mobile-nav-link ${
                    isActive("/services") ? "active" : ""
                  }`}
                >
                  Tjänster
                  <span
                    style={{ float: "right" }}
                    className="mobile-only d-block d-sm-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="17"
                      viewBox="0 0 8 17"
                      fill="none"
                    >
                      <path
                        d="M0.547594 1.93944L0.326625 2.16038C0.180188 2.30682 0.180188 2.54425 0.326625 2.69072L6.43578 8.79991L0.326625 14.9091C0.180188 15.0555 0.180188 15.293 0.326625 15.4394L0.547594 15.6604C0.694031 15.8068 0.931469 15.8068 1.07791 15.6604L7.67325 9.06507C7.81969 8.91863 7.81969 8.68119 7.67325 8.53472L1.07791 1.93944C0.931469 1.79297 0.694031 1.79297 0.547594 1.93944Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </Nav.Link>
                <Nav.Link
                  href="/news"
                  // className="mobile-nav-link"
                  className={`mobile-nav-link ${
                    isActive("/news") ? "active" : ""
                  }`}
                >
                  Nyheter
                  <span
                    style={{ float: "right" }}
                    className="mobile-only d-block d-sm-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="17"
                      viewBox="0 0 8 17"
                      fill="none"
                    >
                      <path
                        d="M0.547594 1.93944L0.326625 2.16038C0.180188 2.30682 0.180188 2.54425 0.326625 2.69072L6.43578 8.79991L0.326625 14.9091C0.180188 15.0555 0.180188 15.293 0.326625 15.4394L0.547594 15.6604C0.694031 15.8068 0.931469 15.8068 1.07791 15.6604L7.67325 9.06507C7.81969 8.91863 7.81969 8.68119 7.67325 8.53472L1.07791 1.93944C0.931469 1.79297 0.694031 1.79297 0.547594 1.93944Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </Nav.Link>
                <Nav.Link
                  href="/contact"
                  className={`mobile-nav-link ${
                    isActive("/contact") ? "active" : "inactive"
                  }`}
                >
                  Kontakt
                  <span
                    style={{ float: "right" }}
                    className="mobile-only d-block d-sm-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="17"
                      viewBox="0 0 8 17"
                      fill="none"
                    >
                      <path
                        d="M0.547594 1.93944L0.326625 2.16038C0.180188 2.30682 0.180188 2.54425 0.326625 2.69072L6.43578 8.79991L0.326625 14.9091C0.180188 15.0555 0.180188 15.293 0.326625 15.4394L0.547594 15.6604C0.694031 15.8068 0.931469 15.8068 1.07791 15.6604L7.67325 9.06507C7.81969 8.91863 7.81969 8.68119 7.67325 8.53472L1.07791 1.93944C0.931469 1.79297 0.694031 1.79297 0.547594 1.93944Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </Nav.Link>
                <Nav.Link href="/" className="mobile-nav-link">
                  Jobba med oss
                  <span
                    style={{ float: "right" }}
                    className="mobile-only d-block d-sm-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="17"
                      viewBox="0 0 8 17"
                      fill="none"
                    >
                      <path
                        d="M0.547594 1.93944L0.326625 2.16038C0.180188 2.30682 0.180188 2.54425 0.326625 2.69072L6.43578 8.79991L0.326625 14.9091C0.180188 15.0555 0.180188 15.293 0.326625 15.4394L0.547594 15.6604C0.694031 15.8068 0.931469 15.8068 1.07791 15.6604L7.67325 9.06507C7.81969 8.91863 7.81969 8.68119 7.67325 8.53472L1.07791 1.93944C0.931469 1.79297 0.694031 1.79297 0.547594 1.93944Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
      ) : (
        <>
          {console.log("header-2")}
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
                {isSticky ? (
                  <img
                    src={process.env.PUBLIC_URL + "/images/logo3.png"}
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
                style={{ background: "#89BF50", height: "100vh" }}
              >
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5>
                  {/* <button
                    type="button"
                    class="btn-close text-white"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    onClick={() => setNavExpanded(!navExpanded)}
                    style={{
                      color: "white",
                      top: "100px",
                      position: "relative",
                      border:'none',
                      outline:'none'
                    }}
                  >
                    
                  </button> */}
                  <button
                    type="button"
                    class="text-white"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    onClick={() => setNavExpanded(!navExpanded)}
                    style={{
                      color: "white",
                      top: "100px",
                      right: "5px",
                      position: "relative",
                      border: "none",
                      outline: "none",
                      background: "transparent", // Optionally, make the button background transparent
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="30"
                      viewBox="0 0 19 30"
                      fill="none"
                      style={{ width: "46px", height: "46px" }}
                    >
                      <path
                        d="M11.6137 15L17.623 8.99063L18.8623 7.75137C19.0451 7.56855 19.0451 7.27148 18.8623 7.08867L17.5363 5.7627C17.3535 5.57988 17.0564 5.57988 16.8736 5.7627L9.625 13.0113L2.37637 5.76211C2.19355 5.5793 1.89648 5.5793 1.71367 5.76211L0.387109 7.08809C0.204297 7.2709 0.204297 7.56797 0.387109 7.75078L7.63633 15L0.387109 22.2486C0.204297 22.4314 0.204297 22.7285 0.387109 22.9113L1.71309 24.2373C1.8959 24.4201 2.19297 24.4201 2.37578 24.2373L9.625 16.9887L15.6344 22.998L16.8736 24.2373C17.0564 24.4201 17.3535 24.4201 17.5363 24.2373L18.8623 22.9113C19.0451 22.7285 19.0451 22.4314 18.8623 22.2486L11.6137 15Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
                {console.log("nav expanded----------", navExpanded)}

                <div class="offcanvas-body">
                  <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <hr style={{ color: "red" }} />
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        aria-current="page"
                        href="/"
                        style={{ color: "#00354E", fontWeight: 600 }}
                      >
                        Hem
                      </a>
                      {isTablet && (
                        <>
                          <span
                            style={{
                              float: "right",
                              top: "-30px",
                              position: "relative",
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="8"
                              height="16"
                              viewBox="0 0 8 16"
                              fill="none"
                            >
                              <path
                                d="M0.547594 1.13964L0.326625 1.36057C0.180188 1.50701 0.180188 1.74445 0.326625 1.89092L6.43578 8.00011L0.326625 14.1093C0.180188 14.2557 0.180188 14.4932 0.326625 14.6396L0.547594 14.8606C0.694031 15.007 0.931469 15.007 1.07791 14.8606L7.67325 8.26526C7.81969 8.11882 7.81969 7.88139 7.67325 7.73492L1.07791 1.13964C0.931469 0.993168 0.694031 0.993168 0.547594 1.13964Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                        </>
                      )}
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="/sustainability"
                        style={{ color: "#00354E", fontWeight: 600 }}
                      >
                        Hållbarhet
                      </a>
                      {isTablet && (
                        <>
                          <span
                            style={{
                              float: "right",
                              top: "-30px",
                              position: "relative",
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="8"
                              height="16"
                              viewBox="0 0 8 16"
                              fill="none"
                            >
                              <path
                                d="M0.547594 1.13964L0.326625 1.36057C0.180188 1.50701 0.180188 1.74445 0.326625 1.89092L6.43578 8.00011L0.326625 14.1093C0.180188 14.2557 0.180188 14.4932 0.326625 14.6396L0.547594 14.8606C0.694031 15.007 0.931469 15.007 1.07791 14.8606L7.67325 8.26526C7.81969 8.11882 7.81969 7.88139 7.67325 7.73492L1.07791 1.13964C0.931469 0.993168 0.694031 0.993168 0.547594 1.13964Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                        </>
                      )}
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="/services"
                        style={{ color: "#00354E", fontWeight: 600 }}
                      >
                        Tjänster
                      </a>
                      {isTablet && (
                        <>
                          <span
                            style={{
                              float: "right",
                              top: "-30px",
                              position: "relative",
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="8"
                              height="16"
                              viewBox="0 0 8 16"
                              fill="none"
                            >
                              <path
                                d="M0.547594 1.13964L0.326625 1.36057C0.180188 1.50701 0.180188 1.74445 0.326625 1.89092L6.43578 8.00011L0.326625 14.1093C0.180188 14.2557 0.180188 14.4932 0.326625 14.6396L0.547594 14.8606C0.694031 15.007 0.931469 15.007 1.07791 14.8606L7.67325 8.26526C7.81969 8.11882 7.81969 7.88139 7.67325 7.73492L1.07791 1.13964C0.931469 0.993168 0.694031 0.993168 0.547594 1.13964Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                        </>
                      )}
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="/news"
                        style={{ color: "#00354E", fontWeight: 600 }}
                      >
                        Nyheter
                      </a>
                      {isTablet && (
                        <>
                          <span
                            style={{
                              float: "right",
                              top: "-30px",
                              position: "relative",
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="8"
                              height="16"
                              viewBox="0 0 8 16"
                              fill="none"
                            >
                              <path
                                d="M0.547594 1.13964L0.326625 1.36057C0.180188 1.50701 0.180188 1.74445 0.326625 1.89092L6.43578 8.00011L0.326625 14.1093C0.180188 14.2557 0.180188 14.4932 0.326625 14.6396L0.547594 14.8606C0.694031 15.007 0.931469 15.007 1.07791 14.8606L7.67325 8.26526C7.81969 8.11882 7.81969 7.88139 7.67325 7.73492L1.07791 1.13964C0.931469 0.993168 0.694031 0.993168 0.547594 1.13964Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                        </>
                      )}
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="/contact"
                        style={{ color: "#00354E", fontWeight: 600 }}
                      >
                        Kontakt
                      </a>
                      {isTablet && (
                        <>
                          <span
                            style={{
                              float: "right",
                              top: "-30px",
                              position: "relative",
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="8"
                              height="16"
                              viewBox="0 0 8 16"
                              fill="none"
                            >
                              <path
                                d="M0.547594 1.13964L0.326625 1.36057C0.180188 1.50701 0.180188 1.74445 0.326625 1.89092L6.43578 8.00011L0.326625 14.1093C0.180188 14.2557 0.180188 14.4932 0.326625 14.6396L0.547594 14.8606C0.694031 15.007 0.931469 15.007 1.07791 14.8606L7.67325 8.26526C7.81969 8.11882 7.81969 7.88139 7.67325 7.73492L1.07791 1.13964C0.931469 0.993168 0.694031 0.993168 0.547594 1.13964Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                        </>
                      )}
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="#"
                        style={{ color: "#00354E", fontWeight: 600 }}
                      >
                        Jobba med oss
                      </a>
                      {isTablet && (
                        <>
                          <span
                            style={{
                              float: "right",
                              top: "-30px",
                              position: "relative",
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="8"
                              height="16"
                              viewBox="0 0 8 16"
                              fill="none"
                            >
                              <path
                                d="M0.547594 1.13964L0.326625 1.36057C0.180188 1.50701 0.180188 1.74445 0.326625 1.89092L6.43578 8.00011L0.326625 14.1093C0.180188 14.2557 0.180188 14.4932 0.326625 14.6396L0.547594 14.8606C0.694031 15.007 0.931469 15.007 1.07791 14.8606L7.67325 8.26526C7.81969 8.11882 7.81969 7.88139 7.67325 7.73492L1.07791 1.13964C0.931469 0.993168 0.694031 0.993168 0.547594 1.13964Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                        </>
                      )}
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
