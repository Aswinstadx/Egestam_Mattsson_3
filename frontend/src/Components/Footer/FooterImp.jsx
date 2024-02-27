import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="container footer">
      <div className="row mt-5">
        <div className="col-md-4">
          <h3>Kontakt</h3>
          <ul>
            <li>
              <p>Egestam Mattsson El & Data AB</p>
            </li>
            <li style={{ top: "-10px", position: "relative" }}>
              <p>Ridspögatan 15a</p>
            </li>
            <li
              style={{
                fontFamily: "Montserrat",
                top: "-20px",
                position: "relative",
              }}
            >
              213 77 Malmö
            </li>
            <li style={{ fontFamily: "Montserrat" }}>Tel: 040-6170166</li>
            <li style={{ fontFamily: "Montserrat" }}>
              E-post: info@emeldata.se
            </li>
            <li
              style={{
                fontFamily: "Montserrat",
                top: "20px",
                position: "relative",
              }}
            >
              Integritetspolicy
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <div className="second-column">
            <div>
              <ul>
                <li>
                  <p
                    style={{
                      fontFamily: "Inter",
                      fontSize: "18px",
                      fontWeight: 600,
                    }}
                  >
                    Meny
                  </p>
                </li>
                <div style={{ top: "-10px", position: "relative" }}>
                  <li>
                    <p style={{ fontFamily: "Inter", fontSize: "16px" }}>Hem</p>
                  </li>
                  <div style={{ top: "-10px", position: "relative" }}>
                    <li style={{ fontFamily: "Inter", fontSize: "16px" }}>
                      Hållbarhet
                    </li>
                    <li style={{ fontFamily: "Inter", fontSize: "16px" }}>
                      Tjänter
                    </li>
                    <li style={{ fontFamily: "Inter", fontSize: "16px" }}>
                      Kontakta oss
                    </li>
                    <li style={{ fontFamily: "Inter", fontSize: "16px" }}>
                      Jobba med oss
                    </li>
                  </div>
                </div>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <p
                    style={{
                      fontFamily: "Inter",
                      fontSize: "18px",
                      fontWeight: 600,
                    }}
                  >
                    Din integritet
                  </p>
                </li>
                <li>
                  <p
                    style={{
                      fontFamily: "Inter",
                      fontSize: "16px",
                      top: "-12px",
                      position: "relative",
                    }}
                  >
                    Integritetspolicy
                  </p>
                </li>
                <li
                  style={{
                    fontFamily: "Inter",
                    fontSize: "16px",
                    top: "-20px",
                    position: "relative",
                  }}
                >
                  Cookiepolicy
                </li>
                <li
                  style={{
                    fontFamily: "Inter",
                    fontSize: "16px",
                    top: "-12px",
                    position: "relative",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1035_742)">
                      <path
                        d="M32 16C32 24.9143 24.9143 32 16 32C7.08571 32 0 24.9143 0 16C0 7.08571 7.08571 0 16 0C24.9143 0 32 7.08571 32 16ZM19.6571 8.45714H17.3714C15.3143 8.45714 13.9429 10.0571 13.9429 12.1143V13.7143H11.4286V16.2286H13.9429V23.5429H16.6857V16.2286H19.6571V13.7143H16.6857V11.8857C16.6857 11.4286 16.9143 10.9714 17.3714 10.9714H19.6571V8.45714Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1035_742">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>{" "}
                  Facebook
                </li>
                <li style={{ fontFamily: "Inter", fontSize: "16px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M16 0C7.16479 0 0 7.16479 0 16C0 24.8352 7.16479 32 16 32C24.8352 32 32 24.8352 32 16C32 7.16479 24.8352 0 16 0ZM25.1321 19.7878C25.0876 20.7659 24.9321 21.4336 24.7051 22.0181C24.2278 23.2522 23.2522 24.2278 22.0181 24.7051C21.4338 24.9321 20.7659 25.0874 19.7881 25.1321C18.8083 25.1768 18.4954 25.1875 16.0002 25.1875C13.5049 25.1875 13.1921 25.1768 12.2122 25.1321C11.2344 25.0874 10.5664 24.9321 9.98218 24.7051C9.3689 24.4744 8.81372 24.1128 8.35474 23.6453C7.88745 23.1865 7.52588 22.6311 7.29517 22.0181C7.06812 21.4338 6.9126 20.7659 6.86816 19.7881C6.823 18.8081 6.8125 18.4951 6.8125 16C6.8125 13.5049 6.823 13.1919 6.86792 12.2122C6.91235 11.2341 7.06763 10.5664 7.29468 9.98193C7.52539 9.3689 7.88721 8.81348 8.35474 8.35474C8.81348 7.88721 9.3689 7.52563 9.98193 7.29492C10.5664 7.06787 11.2341 6.9126 12.2122 6.86792C13.1919 6.82324 13.5049 6.8125 16 6.8125C18.4951 6.8125 18.8081 6.82324 19.7878 6.86816C20.7659 6.9126 21.4336 7.06787 22.0181 7.29468C22.6311 7.52539 23.1865 7.88721 23.6455 8.35474C24.1128 8.81372 24.4746 9.3689 24.7051 9.98193C24.9324 10.5664 25.0876 11.2341 25.1323 12.2122C25.177 13.1919 25.1875 13.5049 25.1875 16C25.1875 18.4951 25.177 18.8081 25.1321 19.7878Z"
                      fill="white"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    style={{ left: "-24px", position: "relative" }}
                  >
                    <path
                      d="M15.1621 2.5813C15.0149 2.18237 14.78 1.82129 14.4749 1.5249C14.1785 1.21973 13.8176 0.984863 13.4185 0.837646C13.0947 0.711914 12.6084 0.562256 11.7126 0.521484C10.7437 0.477295 10.4531 0.467773 8 0.467773C5.54663 0.467773 5.2561 0.477051 4.28735 0.52124C3.3916 0.562256 2.90503 0.711914 2.58154 0.837646C2.18237 0.984863 1.82129 1.21973 1.52515 1.5249C1.21997 1.82129 0.985107 2.18213 0.837646 2.5813C0.711914 2.90503 0.562256 3.3916 0.521484 4.28735C0.477295 5.2561 0.467773 5.54663 0.467773 8C0.467773 10.4531 0.477295 10.7437 0.521484 11.7126C0.562256 12.6084 0.711914 13.0947 0.837646 13.4185C0.985107 13.8176 1.21973 14.1785 1.5249 14.4749C1.82129 14.78 2.18213 15.0149 2.5813 15.1621C2.90503 15.2881 3.3916 15.4377 4.28735 15.4785C5.2561 15.5227 5.54639 15.532 7.99976 15.532C10.4534 15.532 10.7439 15.5227 11.7124 15.4785C12.6082 15.4377 13.0947 15.2881 13.4185 15.1621C14.2197 14.853 14.853 14.2197 15.1621 13.4185C15.2878 13.0947 15.4375 12.6084 15.4785 11.7126C15.5227 10.7437 15.532 10.4531 15.532 8C15.532 5.54663 15.5227 5.2561 15.4785 4.28735C15.4377 3.3916 15.2881 2.90503 15.1621 2.5813ZM8 12.7175C5.39429 12.7175 3.28198 10.6055 3.28198 7.99976C3.28198 5.39404 5.39429 3.28198 8 3.28198C10.6055 3.28198 12.7178 5.39404 12.7178 7.99976C12.7178 10.6055 10.6055 12.7175 8 12.7175ZM12.9043 4.198C12.2954 4.198 11.8018 3.70435 11.8018 3.09546C11.8018 2.48657 12.2954 1.99292 12.9043 1.99292C13.5132 1.99292 14.0068 2.48657 14.0068 3.09546C14.0066 3.70435 13.5132 4.198 12.9043 4.198Z"
                      fill="white"
                    />
                  </svg>
                  Instagram
                </li>
              </ul>
            </div>
          </div>
          {/* <h2>2</h2> */}
        </div>
        <div className="col-md-4 third-column">
          <h3>Gasellvinnare</h3>
          <div>
            <img src={process.env.PUBLIC_URL + "/images/card3-im.png"} />
          </div>
          <p className="third-column-p">
            Med målet att vara marknadsledande, kombinerar Egestam och Mattsson
            expertkunskap, engagemang och innovation för att bygga varaktiga
            kundrelationer och leverera arbete med fokus på kvalitet,
            miljömedvetenhet och säkerhet.
          </p>
        </div>
      </div>
      <img
        src={process.env.PUBLIC_URL + "/images/logo_3.png"}
        className="footer-image"
      />
      <div className="line"></div>
      <div className="text-center copyright-text">
        Copyright © 2024 All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
