import React, { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Section1 from "./Sections/Section1/Section1";
import Section3 from "./Sections/Section3";
import Section4 from "./Sections/Section4";
import Section5 from "./Sections/Section5";
import Section6 from "./Sections/Section6";
import Section7 from "./Sections/Section1/Section7";
import Section8 from "./Sections/Section8";
import Footer from "./Components/Footer/FooterBKP";
import MobileFooter from "./Components/Footer/MobileFooter";
import Accordion from "./Components/Accordion/Accordion";
import Accordion1 from "./Components/Accordion/Accordion1";
import Accordion2 from "./Components/Accordion/Accordion2";
import Section9 from "./Sections/Section9";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isIpad, setIsIpad] = useState(false);

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

  return (
    <div>
      <Header />
      <Banner />
      <Section1 />
      <Accordion />
      <Accordion1 />
      <Accordion2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      {/* <Section7 /> */}
      {/* <Section8 /> */}
      <div className="d-none d-sm-block">
        <Section9 />
      </div>
      {/* <footer className="d-none d-sm-block">
        <Footer />
      </footer>
      <footer className="d-block d-sm-none">
        <MobileFooter />
      </footer> */}
      <footer className="d-none d-sm-block">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
