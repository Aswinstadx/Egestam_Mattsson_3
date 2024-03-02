import React, { useEffect, useState } from "react";
import { BANNER_VIDEO } from "../../Constants/urls";
import ReactPlayer from "react-player";

function Banner() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isIpad, setIsIpad] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1084);
      setIsIpad(window.innerWidth > 1085 && window.innerWidth <= 1366);
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
      {isMobile ? (
        <>
          <ReactPlayer
            url={process.env.PUBLIC_URL + "/videos/banner_mobile_2.mp4"}
            playing={true}
            playsinline
            playsInline
            loop={true}
            volume={0}
            controls={false}
            width="100%"
            height="auto"
            className="player"
          />
        </>
      ) : isTablet ? (
        <>
          {/* <ReactPlayer
            url={process.env.PUBLIC_URL + "/videos/banner_tablet.mp4"}
            playing={true}
            playsinline
            loop={true}
            volume={0}
            controls={false}
            width="100%"
            height="auto"
            className="player"
          /> */}
          <ReactPlayer
            url={process.env.PUBLIC_URL + "/videos/banner_ipad_2.mp4"}
            playing={true}
            playsinline
            loop={true}
            volume={0}
            controls={false}
            width="100%"
            height="auto"
            className="player"
          />
        </>
      ) : isIpad ? (
        <>
          <ReactPlayer
            url={process.env.PUBLIC_URL + "/videos/banner_ipad.mp4"}
            playing={true}
            playsinline
            loop={true}
            volume={0}
            controls={false}
            width="100%"
            height="auto"
            className="player"
          />
        </>
      ) : (
        <ReactPlayer
          // url={BANNER_VIDEO}
          url={process.env.PUBLIC_URL + "/videos/banner_desktop_2.mp4"}
          playing={true}
          playsinline
          loop={true}
          volume={0}
          controls={false}
          width="100%"
          height="auto"
          className="player"
        />
      )}
      {isMobile ? (
        <div className="banner-text_2 text-center">
          <h1>
            EL, Teknik & Installationer för framtiden med <br />
            <span>hållbara framsteg</span>
          </h1>
          <p>
            Med målet att vara marknadsledande, kombinerar Egestam och Mattsson
            expertkunskap, engagemang och innovation för att bygga varaktiga
            kundrelationer och leverera arbete med fokus på kvalitet,
            miljömedvetenhet och säkerhet.
          </p>
        </div>
      ) : (
        <>
          {" "}
          <div className="banner-text">
            <h1>
              EL, Teknik & Installationer för framtiden med{" "}
              <span>hållbara framsteg</span>{" "}
            </h1>
            <p>
              Med målet att vara marknadsledande, kombinerar Egestam och
              Mattsson expertkunskap, engagemang och innovation för att bygga
              varaktiga kundrelationer och leverera arbete med fokus på
              kvalitet, miljömedvetenhet och säkerhet.
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default Banner;
