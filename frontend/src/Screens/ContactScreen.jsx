import React, { useEffect, useState } from "react";
import ContactBanner from "../Components/Banner/ContactBanner";
import { MAP_IMAGE } from "../Constants/urls";
import MobileFooter from "../Components/Footer/MobileFooter";
import Footer from "../Components/Footer/Footer";

function ContactScreen() {
  const [isMobile, setIsMobile] = useState(false);

  const [isTablet, setIsTablet] = useState(false);
  const [isIpad, setIsIpad] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1084);
      setIsIpad(window.innerWidth > 1085 && window.innerWidth <= 1266);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const cards = [
    {
      title: "Installation",
      src: process.env.PUBLIC_URL + "/images/1.png",
    },
    {
      title: "Nybyggnation",
      src: process.env.PUBLIC_URL + "/images/2.png",
    },
    {
      title: "Renovering",
      src: process.env.PUBLIC_URL + "/images/3.png",
    },
    {
      title: "Elbilsladdare",
      src: process.env.PUBLIC_URL + "/images/4.png",
    },
    {
      title: "Solceller",
      src: process.env.PUBLIC_URL + "/images/5.png",
    },
    {
      title: " EL i styr",
      src: process.env.PUBLIC_URL + "/images/6.png",
    },
  ];

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
    <div className="contact_page">
      <ContactBanner />

      <div className="container-fluid">
        <div className="contact_page_section1 ">
          <div className="row">
            <div className="col-md-6">
              <h3>Kontaktuppgifter</h3>
              <div className="contact_page_section1_div1">
                <h4>Kontor</h4>
                <div className="contact_page_section1_div2">
                  <p className="email__">info@emeldata.se</p>
                  <p className="contact____">(+46) 040-6170166</p>
                  <p className="address__">Telefontider: 08:00-17:00</p>
                  <p className="place__">Måndag-Fredag</p>
                </div>
                <div className="contact_page_section1_div3">
                  <p>Egestam Mattsson El & Data AB</p>
                  <p>Ridspögatan 15a</p>
                  <p>213 77 Malmö</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={process.env.PUBLIC_URL + "/images/map.png"}
                className="map_image"
              />
            </div>
          </div>
        </div>
      </div>
      {isIpad || isMobile || isTablet ? (
        <>
          <div className="contact_page_section2 ">
            <div className="svg_banner">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1946"
                height="658"
                viewBox="0 0 1946 658"
                fill="none"
                className="banner___contact"
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
              </svg>
            </div>
            <div className="svg_banner_text testimonials">
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/emilie-bild-hemsida-ny.png.png"
                    }
                    alt="Image"
                    // className="w-100"
                    style={{
                      height: !isMobile ? "277px" : "150px",
                      width: "auto",
                      top: "5px",
                      position: "relative",
                      borderRadius: isMobile && "45%",
                    }}
                  />
                </div>
                <div>
                  <div className="testimonial_card">
                    <h2>Daniel Egestam</h2>
                    <h3>Projektchef-Delagare</h3>
                    <h4>Maila mig</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="contact_page_section2 "
            style={{ marginTop: "-220px", position: "relative" }}
          >
            <div className="svg_banner">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1946"
                height="658"
                viewBox="0 0 1946 658"
                fill="none"
                className="banner___contact"
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
              </svg>
            </div>
            <div
              className="svg_banner_text testimonials"
              style={{ marginTop: isMobile && "-100px" }}
            >
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/emilie-bild-hemsida-ny.png.png"
                    }
                    alt="Image"
                    // className="w-100"
                    style={{
                      height: !isMobile ? "277px" : "150px",
                      width: "auto",
                      top: "5px",
                      position: "relative",
                      borderRadius: isMobile && "45%",
                    }}
                  />
                </div>
                <div>
                  <div className="testimonial_card">
                    <h2>Daniel Egestam</h2>
                    <h3>Projektchef-Delagare</h3>
                    <h4>Maila mig</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="contact_page_section2 ">
            <div className="svg_banner">
              <svg
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
              </svg>
            </div>
            <div className="svg_banner_text testimonials">
              <div className="left-content">
                <div>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/emilie-bild-hemsida-ny.png.png"
                    }
                    alt="Image"
                    className="testimonials_image"
                  />
                </div>
                <div>
                  <div className="testimonial_card">
                    <h2>Daniel Egestam</h2>
                    <h3>Projektchef-Delagare</h3>
                    <h4>Maila mig</h4>
                  </div>
                </div>
              </div>
              <div className="right-content">
                <div>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/emilie-bild-hemsida-ny.png.png"
                    }
                    alt="Image"
                    className="testimonials_image"
                  />
                </div>
                <div>
                  <div className="testimonial_card">
                    <h2>Daniel Egestam</h2>
                    <h3>Projektchef-Delagare</h3>
                    <h4>Maila mig</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="container-fluid round-cards-list">
        <h4 className="round_card_text">Läs mer om våra tjänster</h4>
        <div className="card-container__2">
          {cards.map((card) => (
            <div key={card} className="card__2">
              <img src={card?.src} className="w-100" />
              <div className="title-overlay">{card?.title}</div>
            </div>
          ))}
        </div>
        <div className="row card__block">
          <div className="col-md-3">
            <img
              src={process.env.PUBLIC_URL + "/images/card-1.png"}
              className="w-100"
            />
          </div>
          <div className="col-md-3">
            <img
              src={process.env.PUBLIC_URL + "/images/card-1.png"}
              className="w-100"
            />
          </div>
          <div className="col-md-3">
            <img
              src={process.env.PUBLIC_URL + "/images/card-1.png"}
              className="w-100"
            />
          </div>
          <div className="col-md-3">
            <img
              src={process.env.PUBLIC_URL + "/images/card-1.png"}
              className="w-100"
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
