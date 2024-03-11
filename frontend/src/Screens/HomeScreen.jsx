import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner/Banner";
import Section1 from "../Sections/Section1/Section1";

import Accordion1 from "../Components/Accordion/Accordion1";
import Accordion2 from "../Components/Accordion/Accordion2";
import Section3 from "../Sections/Section3";
import Section4 from "../Sections/Section4";
import Section5 from "../Sections/Section5";
import Section6 from "../Sections/Section6";
import Section7 from "../Sections/Section1/Section7";
import Section9 from "../Sections/Section9";
import Accordion from "../Components/Accordion/Accordion";
import Footer from "../Components/Footer/Footer";
import MobileOnly from "../Sections/MobileOnly";
import MobileFooter from "../Components/Footer/MobileFooter";

function HomeScreen() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      {console.log("Screen width : ", screenWidth)}
      <div>
        <Banner />
        {isMobile ? (
          <div style={{ top: "-16px", position: "relative" }}>
            <Accordion />
            <Accordion1 />
            <Accordion2 />
            <Section1 />
          </div>
        ) : (
          <div style={{ top: "-17px", position: "relative" }}>
            <Section1 />
            <Accordion />
            <Accordion1 />
            <Accordion2 />
          </div>
        )}

        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        {isMobile ? (
          <>
            <MobileOnly />
          </>
        ) : (
          <>
            <div className="ipad-block">
              <Section7 />
            </div>
            <Section9 />
          </>
        )}
        <footer>
          {isMobile ? (
            <>
              <MobileFooter />
            </>
          ) : (
            <>
              <Footer />
            </>
          )}
        </footer>
      </div>
    </div>
  );
}

export default HomeScreen;
