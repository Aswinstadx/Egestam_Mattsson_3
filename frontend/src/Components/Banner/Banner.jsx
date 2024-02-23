import React, { useEffect, useState } from "react";
import { BANNER_VIDEO } from "../../Constants/urls";
import ReactPlayer from "react-player";

function Banner() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

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
  // src={process.env.PUBLIC_URL + "/logo.png"}
  return (
    <div className="banner-container">
      <div className="banner-overlay" />
      <ReactPlayer
        url={BANNER_VIDEO}
        playing={true}
        playsinline
        loop={true}
        volume={0}
        controls={false}
        width="100%"
        height="auto"
        className="player"
      />
      <div className="banner-text">
        <h1>
          EL, Teknik & Installationer för framtiden med{" "}
          <span>hållbara framsteg</span>{" "}
        </h1>
        <p>
          Med målet att vara marknadsledande, kombinerar Egestam och Mattsson
          expertkunskap, engagemang och innovation för att bygga varaktiga
          kundrelationer och leverera arbete med fokus på kvalitet,
          miljömedvetenhet och säkerhet.
        </p>
      </div>
    </div>
  );
}

export default Banner;
