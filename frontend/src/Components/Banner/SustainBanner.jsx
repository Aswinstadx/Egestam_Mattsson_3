import React, { useEffect, useState } from "react";
import {
  BANNER_VIDEO,
  SUSTAINABILITY_BANNER_VIDEO,
} from "../../Constants/urls";
import ReactPlayer from "react-player";

function SustainBanner() {
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
            url={process.env.PUBLIC_URL + "/videos/sus_mo.mp4"}
            // url={SUSTAINABILITY_BANNER_VIDEO}
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
            // url={process.env.PUBLIC_URL + "/videos/banner_ipad_2.mp4"}
            url={SUSTAINABILITY_BANNER_VIDEO}
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
            // url={process.env.PUBLIC_URL + "/videos/banner_sustain_tabview.mp4"}
            url={SUSTAINABILITY_BANNER_VIDEO}
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
          // url={process.env.PUBLIC_URL + "/videos/banner_sustain_desktop.mp4"}
          url={SUSTAINABILITY_BANNER_VIDEO}
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
        <div
          className="sustai_text banner-text_2 "
          style={{ textAlign: "left" }}
        >
          <h1 style={{ textAlign: "left" }}>
            <span> Hållbarhet</span>
            <br /> för en bättre framtid
          </h1>
          <p style={{ textAlign: "left" ,left:'33px',position:'relative'}}>
            Vårt engagemang för en bättre framtid är tydligt. Vi strävar efter
            att minska miljöpåverkan och främja teknisk innovation. Genom att
            erbjuda energieffektiva lösningar, integrerade system, och smarta
            teknologier, arbetar vi aktivt för att skapa miljövänliga
            fastigheter och infrastruktur. Här berättar vi mer om hur vi driver
            förändring och främjar hållbarhet i allt vi gör.
          </p>
        </div>
      ) : (
        <>
          {" "}
          <div className="banner-text">
            <h1>
              <span> Hållbarhet</span> för en bättre framtid{" "}
            </h1>
            <p>
              Vårt engagemang för en bättre framtid är tydligt. Vi strävar efter
              att minska miljöpåverkan och främja teknisk innovation. Genom att
              erbjuda energieffektiva lösningar, integrerade system, och smarta
              teknologier, arbetar vi aktivt för att skapa miljövänliga
              fastigheter och infrastruktur. Här berättar vi mer om hur vi
              driver förändring och främjar hållbarhet i allt vi gör.
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default SustainBanner;
