import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

function NewsBanner() {
  const [isIpad, setIsIpad] = useState(false);
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
      <div className="banner-container">
        {" "}
        {isMobile ? (
          <>
            <div className="video-container">
              <div className="video-overlay-2">
                <ReactPlayer
                  url={process.env.PUBLIC_URL + "/videos/news_banner-mob.mp4"}
                  playing={true}
                  playsinline
                  loop={true}
                  volume={0}
                  controls={false}
                  width="100%"
                  height="auto"
                  className="player"
                />
              </div>
              <div className="text-overlay">
                <h1>Nyheter</h1>
                <p>
                  Här uppdaterar vi regelbundet och publicerar välresearchade
                  artiklar, tips för energibesparing och
                  säkerhetsrekommendationer. Du hittar även nyheter om vad som
                  händer hos oss med nya projekt och annan övrig information.
                </p>
              </div>
            </div>
          </>
        ) : isIpad ? (
          <>
            {console.log("this is ipad")}
            <div className="video-container">
              <div className="video-overlay-2">
                <ReactPlayer
                  url={process.env.PUBLIC_URL + "/videos/news_mobile.mp4"}
                  playing={true}
                  playsinline
                  loop={true}
                  volume={0}
                  controls={false}
                  width="100%"
                  height="auto"
                  className="player"
                />
              </div>
              <div className="text-overlay">
                <h1>Nyheter</h1>
                <p>
                  Här uppdaterar vi regelbundet och publicerar välresearchade
                  artiklar, tips för energibesparing och
                  säkerhetsrekommendationer. Du hittar även nyheter om vad som
                  händer hos oss med nya projekt och annan övrig information.
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="video-overlay-2">
              <ReactPlayer
                url={process.env.PUBLIC_URL + "/videos/news_desktop2.mp4"}
                playing={true}
                playsinline
                loop={true}
                volume={0}
                controls={false}
                width="100vw"
                // height="599px"
                height="auto"
                className="player"
              />
            </div>
            <div className="banner-text2">
              <h1>Nyheter</h1>
              <p>
                Här uppdaterar vi regelbundet och publicerar välresearchade
                artiklar, tips för energibesparing och
                säkerhetsrekommendationer. Du hittar även nyheter om vad som
                händer hos oss med nya projekt och annan övrig information.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default NewsBanner;
