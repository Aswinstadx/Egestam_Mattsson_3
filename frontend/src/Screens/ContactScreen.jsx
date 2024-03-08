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
