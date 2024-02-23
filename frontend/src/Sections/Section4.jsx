import React, { useEffect, useState } from "react";

function Section4() {
  const [isIpad, setIsIpad] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // setIsIpad(window.innerWidth <= 1366 && window.innerWidth >= 1024 || window.innerWidth <= 1180 && window.innerWidth >= 768);
      setIsIpad(window.innerWidth <= 1024 || window.innerWidth >= 820 );
    };
    console.log('WINDOW INNER WIDHT--------', window.innerWidth)
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
      {!isIpad ? (
        <>
          <div className="section4">
            <div className="container desktop-only">
              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="d-md-none">
                    <img
                      src={process.env.PUBLIC_URL + "/images/section4.png"}
                    />
                  </div>
                  <h2>Energieffektiva lösningar inom elinstallation</h2>
                  <p>
                    Eftersom energikostnaden är löpande blir energioptimering en
                    investering både för dig och för miljön. Genom att
                    underhålla, uppgradera och digitalisera fastigheter kan vi
                    minska din energianvändning. Låt oss på Egestam & Mattsson
                    ge förslag på lösningar och göra konkreta insatser.   
                  </p>
                  <button>
                    <span>Så här jobbar vi med energioptimering</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                    >
                      <path
                        d="M12.835 5.23626L12.9225 5.30751L16.6725 9.05751L16.7187 9.11001L16.7712 9.18751L16.8087 9.26251L16.8337 9.34001L16.8487 9.41001L16.855 9.50001L16.8512 9.56626L16.8337 9.66001L16.8087 9.73876L16.7437 9.85501L16.6862 9.92626L12.9225 13.6925C12.8122 13.8032 12.6645 13.8687 12.5084 13.8759C12.3524 13.8831 12.1992 13.8316 12.0792 13.7315C11.9593 13.6315 11.8811 13.4901 11.8602 13.3352C11.8393 13.1804 11.8771 13.0233 11.9662 12.895L12.0375 12.8075L14.7212 10.125H3.72997C3.57379 10.1253 3.42316 10.0671 3.30774 9.96188C3.19233 9.85665 3.12049 9.71203 3.10638 9.55648C3.09227 9.40094 3.1369 9.24575 3.2315 9.12147C3.32609 8.99719 3.46379 8.91284 3.61747 8.88501L3.72997 8.87501H14.7212L12.0375 6.19251C11.9341 6.08894 11.8704 5.9524 11.8574 5.80667C11.8444 5.66094 11.8829 5.51526 11.9662 5.39501L12.0375 5.30751C12.1278 5.21748 12.2436 5.15725 12.3691 5.13491C12.4947 5.11257 12.6241 5.12918 12.74 5.18251L12.835 5.23626Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
                <div className="col-md-6 col-12">
                  <div className="d-none d-md-block">
                    <img
                      src={process.env.PUBLIC_URL + "/images/section4.png"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="i-pad-only">
            <div className="overlay-2"></div> {/* Dark overlay */}
            <div className="text-over-image">
              <h2>Energieffektiva lösningar inom elinstallation</h2>
              <p>
                Eftersom energikostnaden är löpande blir energioptimering en
                investering både för dig och för miljön. Genom att underhålla,
                uppgradera och digitalisera fastigheter kan vi minska din
                energianvändning. Låt oss på Egestam & Mattsson ge förslag på
                lösningar och göra konkreta insatser.   
              </p>
              <button>
                <span>Så här jobbar vi med energioptimering</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                >
                  <path
                    d="M12.835 5.23626L12.9225 5.30751L16.6725 9.05751L16.7187 9.11001L16.7712 9.18751L16.8087 9.26251L16.8337 9.34001L16.8487 9.41001L16.855 9.50001L16.8512 9.56626L16.8337 9.66001L16.8087 9.73876L16.7437 9.85501L16.6862 9.92626L12.9225 13.6925C12.8122 13.8032 12.6645 13.8687 12.5084 13.8759C12.3524 13.8831 12.1992 13.8316 12.0792 13.7315C11.9593 13.6315 11.8811 13.4901 11.8602 13.3352C11.8393 13.1804 11.8771 13.0233 11.9662 12.895L12.0375 12.8075L14.7212 10.125H3.72997C3.57379 10.1253 3.42316 10.0671 3.30774 9.96188C3.19233 9.85665 3.12049 9.71203 3.10638 9.55648C3.09227 9.40094 3.1369 9.24575 3.2315 9.12147C3.32609 8.99719 3.46379 8.91284 3.61747 8.88501L3.72997 8.87501H14.7212L12.0375 6.19251C11.9341 6.08894 11.8704 5.9524 11.8574 5.80667C11.8444 5.66094 11.8829 5.51526 11.9662 5.39501L12.0375 5.30751C12.1278 5.21748 12.2436 5.15725 12.3691 5.13491C12.4947 5.11257 12.6241 5.12918 12.74 5.18251L12.835 5.23626Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>{" "}
            {/* Text */}
          </div>
        </>
      )}
    </div>
  );
}

export default Section4;
