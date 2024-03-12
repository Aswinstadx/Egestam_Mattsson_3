import React, { useEffect, useState } from "react";
import ContactBanner from "../Components/Banner/ContactBanner";
import { MAP_IMAGE } from "../Constants/urls";
import MobileFooter from "../Components/Footer/MobileFooter";
import Footer from "../Components/Footer/Footer";

function ContactScreen() {
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
  return (
    <div>
      <ContactBanner />
      <div
        className="p-5 contact-screen mt-2"
        style={{ padding: "60px", marginLeft: "100px" }}
      >
        <div className="row">
          <div className="col-md-5 ">
            <h4>Kontaktuppgifter</h4>
            <div className="contact-div-1">
              <h6>Kontor</h6>
              <div className="contact-info_">
                <p className="email">info@emeldata.se</p>
                <p className="phone">(+46) 040-6170166</p>
                <p className="address">Telefontider: 08:00-17:00</p>
                <p className="address address1">Måndag-Fredag</p>
              </div>
            </div>
            <div className="contact-div-2">
              <div className="contact-info_2">
                <p>Egestam Mattsson El & Data AB</p>
                <p>Ridspögatan 15a</p>
                <p>213 77 Malmö</p>
              </div>
            </div>
          </div>
          <div className="col-md-7 mt-5">
            <img src={MAP_IMAGE} className="map-image" />
          </div>
        </div>
      </div>
      <div className="testimonials">
        <div className="container___">
          <div className="row row__1">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/emilie-bild-hemsida-ny.png.png"
                    }
                    alt="Image"
                  />
                </div>
                <div className="col-md-6">
                  <div className="testimonial_card">
                    <h2>Daniel Egestam</h2>
                    <h3>Projektchef-Delagare</h3>
                    <h4>Maila mig</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/images/andreas-hemsida.png.png"
                    }
                    alt="Image"
                  />
                </div>
                <div className="col-md-6">
                  <div className="testimonial_card">
                    <h2>Jonatan Mattsson</h2>
                    <h3>Affarschef-Delagare</h3>
                    <h4>Maila mig</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1946"
          height="658"
          viewBox="0 0 1946 658"
          fill="none"
          className="w-100"
        >
          <g filter="url(#filter0_f_2005_1097)">
            <path
              d="M1924.45 113.643C1931.03 143.257 1926.45 211.697 1926.45 259.31C1926.45 291.892 1928.95 332.379 1926.45 352.178C1926.45 375.664 1927.67 391.028 1929.95 395.548C1930.78 397.198 1920.72 394.134 1926.45 394.134C1934.45 394.134 1920.49 613.551 1935.95 644.925C1951.56 676.596 1930.74 607.571 1924.45 618.526C1914.04 636.639 1901.61 595.836 1868.88 595.836C1566.63 595.836 11.4929 690.266 11.4929 586.324C11.4928 270.398 -5.36604 -48.6755 11.4928 11.3244C77.993 11.3247 448.803 58.488 1110.43 58.488C1446.78 58.488 1900.91 7.71187 1924.45 113.643Z"
              fill="#89BF50"
              fill-opacity="0.06"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_2005_1097"
              x="0"
              y="0"
              width="1945.63"
              height="657.311"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_2005_1097"
              />
            </filter>
          </defs>
        </svg> */}
      </div>
      <div
        className="p-5 contact-screen-list mt-2"
        style={{ padding: "60px", marginLeft: "100px" }}
      >
        <h4>Läs mer om våra tjänster</h4>
        <div>
          <div className="row">
            <div className="col-md-4">
              <div style={{ position: "relative" }} className="mt-5">
                <img
                  src={process.env.PUBLIC_URL + "/images/1.png"}
                  alt="Image"
                />
                <p
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "34%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                  }}
                >
                  Installation
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div style={{ position: "relative" }} className="mt-5">
                <img
                  src={process.env.PUBLIC_URL + "/images/2.png"}
                  alt="Image"
                />
                <p
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "34%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                  }}
                >
                  Nybyggnation
                </p>
              </div>
            </div>
            <div className="col-md-4 ">
              <div style={{ position: "relative" }} className="mt-5">
                <img
                  src={process.env.PUBLIC_URL + "/images/3.png"}
                  alt="Image"
                />
                <p
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "34%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                  }}
                >
                  Renovering
                </p>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div style={{ position: "relative" }} className="mt-5">
                <img
                  src={process.env.PUBLIC_URL + "/images/4.png"}
                  alt="Image"
                />
                <p
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "34%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                  }}
                >
                  Elbilsladdare
                </p>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div style={{ position: "relative" }} className="mt-5">
                <img
                  src={process.env.PUBLIC_URL + "/images/5.png"}
                  alt="Image"
                />
                <p
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "34%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                  }}
                >
                  Solceller
                </p>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div style={{ position: "relative" }} className="mt-5">
                <img
                  src={process.env.PUBLIC_URL + "/images/6.png"}
                  alt="Image"
                />
                <p
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "34%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                  }}
                >
                  EL i styr
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-md-3">
            <img
              src={process.env.PUBLIC_URL + "/images/card-1.png"}
              className="lightbx-im"
            />
          </div>
          <div className="col-md-3">
            <img
              src={process.env.PUBLIC_URL + "/images/card-2.png"}
              className="lightbx-im"
            />
          </div>
          <div className="col-md-3">
            <img
              src={process.env.PUBLIC_URL + "/images/card-3.png"}
              className="lightbx-im"
            />
          </div>
          <div className="col-md-3">
            <img
              src={process.env.PUBLIC_URL + "/images/card-4.png"}
              className="lightbx-im"
            />
          </div>
        </div>
      </div>
      {isMobile && (
        <footer
          style={{
            top: isMobile && "50px",
            position: "relative",
            width: "100%",
          }}
        >
          {isMobile && <MobileFooter />}
        </footer>
      )}

      {!isMobile && (
        <footer
          className="w-100 mt-5"
          style={{ top: "50px", position: "relative" }}
        >
          <Footer />
        </footer>
      )}
    </div>
  );
}

export default ContactScreen;
