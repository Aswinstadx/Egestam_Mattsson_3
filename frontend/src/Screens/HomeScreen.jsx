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

function HomeScreen() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
        <Section1 />
        <Accordion />
        <Accordion1 />
        <Accordion2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <div className="ipad-block">
          <Section7 />
        </div>
        {/* <div>
          <Section7 />
        </div> */}
        <Section9 />
      </div>
    </div>
  );
}

export default HomeScreen;
