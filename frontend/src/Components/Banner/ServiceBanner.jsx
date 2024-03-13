import React, { useEffect, useState } from "react";
import {
  BANNER_VIDEO,
  SUSTAINABILITY_BANNER_VIDEO,
} from "../../Constants/urls";
import ReactPlayer from "react-player";

function ServiceBanner() {
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
            url={process.env.PUBLIC_URL + "/videos/service_banner.mp4"}
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
            url={process.env.PUBLIC_URL + "/videos/service_banner.mp4"}
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
            url={process.env.PUBLIC_URL + "/videos/service_banner.mp4"}
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
          url={process.env.PUBLIC_URL + "/videos/service_banner.mp4"}
          //   url={SUSTAINABILITY_BANNER_VIDEO}
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
            Våra Tjänster för
            <span> hållbara</span>
            lösningar
          </h1>
          <p style={{ textAlign: "left", left: "33px", position: "relative" }}>
            Egestam & Mattsson grundades 2012, vi är experter inom el- och
            datanätverksinstallationer. Ett entreprenörsdrivet företag som drivs
            med ett team engagerade medarbetare. Vi kombinerar gedigen teknisk
            kunskap med ett starkt engagemang för hållbarhet, fokuserade på att
            leverera miljövänliga och innovativa lösningar för fastigheter och
            infrastruktur.
          </p>
        </div>
      ) : (
        <>
          {" "}
          <div className="banner-text">
            <h1 style={{ textAlign: "left" }}>
              Våra Tjänster för
              <span> hållbara</span>
              lösningar
            </h1>
            <p style={{width:'90%'}}>
              Egestam & Mattsson grundades 2012, vi är experter inom el- och
              datanätverksinstallationer. Ett entreprenörsdrivet företag som
              drivs med ett team engagerade medarbetare. Vi kombinerar gedigen
              teknisk kunskap med ett starkt engagemang för hållbarhet,
              fokuserade på att leverera miljövänliga och innovativa lösningar
              för fastigheter och infrastruktur.
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default ServiceBanner;
