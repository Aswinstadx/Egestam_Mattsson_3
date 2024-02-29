import React from "react";

function Footer() {
  return (
    <div className="container p-5">
      <div className="footer-elements">
        <div className="footer-column-1">
          <h4>Kontakt</h4>
          <ul>
            <li>Egestam Mattsson El & Data AB</li>
            <li>Ridspögatan 15a</li>
            <li>213 77 Malmö</li>
            <div className="mt-3">
              <li style={{ fontFamily: "Montserrat" }}>Tel : 040-6170166</li>
              <li style={{ fontFamily: "Montserrat" }}>
                E-post : info@emeldata.se
              </li>
              <li style={{ fontFamily: "Montserrat" }}>Integritetspolicy</li>
            </div>
          </ul>
        </div>
        <div className="footer-column-2">
          <h4>Meny</h4>
          <ul>
            <li>Hem</li>
            <li>Hållbarhet</li>
            <li>Tjänter</li>
            <li>Kontakta ossKontakta oss</li>
            <li>Jobba med oss</li>
          </ul>
        </div>
        <div className="footer-column-3">
          <h4>Din integritet</h4>
          <ul>
            <li>Integritetspolicy</li>
            <li>Cookiepolicy</li>
            <li>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <g clip-path="url(#clip0_1050_533)">
                  <path
                    d="M32 16C32 24.9143 24.9143 32 16 32C7.08571 32 0 24.9143 0 16C0 7.08571 7.08571 0 16 0C24.9143 0 32 7.08571 32 16ZM19.6571 8.45714H17.3714C15.3143 8.45714 13.9429 10.0571 13.9429 12.1143V13.7143H11.4286V16.2286H13.9429V23.5429H16.6857V16.2286H19.6571V13.7143H16.6857V11.8857C16.6857 11.4286 16.9143 10.9714 17.3714 10.9714H19.6571V8.45714Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1050_533">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span style={{ marginLeft: "10px" }}>Facebook</span>
            </li>
          </ul>
        </div>
        <div className="footer-column-4">
          <h4>Gasellvinnare</h4>
          <img
            src={process.env.PUBLIC_URL + "/images/card3-im.png"}
            className=""
            style={{ width: "268px", height: "128px" }}
          />
          <p className="mt-2">
            Med målet att vara marknadsledande, kombinerar Egestam och Mattsson
            expertkunskap, engagemang och innovation för att bygga varaktiga
            kundrelationer och leverera arbete med fokus på kvalitet,
            miljömedvetenhet och säkerhet.
          </p>
        </div>
        <div className="footer-column-5">
          <img
            src={process.env.PUBLIC_URL + "/images/logo3.png"}
            alt="Thumbnail"
            style={{marginTop:"230px",left:'150px',position:'relative'}}
          />
        </div>
      </div>
      <hr />
      <div className="text-center copyrit">
        Copyright © 2024 All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
