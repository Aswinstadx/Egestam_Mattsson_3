import React, { useState } from "react";
import "./Accordion.css"; // Import your CSS file
import "../../../Screens/Sustainability.css";

function Accordion1({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="accordion">
        <div
          className="accordion-header"
          onClick={toggleAccordion}
          style={{ backgroundColor: "#89BF50" }}
        >
          {/* <h3>{title}</h3> */}
          <div className="container">
            <h3>Globala målen</h3>
          </div>
          <span className="accord-icon">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="11"
                viewBox="0 0 18 11"
                fill="none"
                className=""
              >
                <path
                  d="M10.4347 0.505783L17.6567 7.72786C17.7648 7.83578 17.8505 7.96395 17.909 8.10502C17.9675 8.24609 17.9976 8.3973 17.9976 8.55001C17.9976 8.70272 17.9675 8.85392 17.909 8.99499C17.8505 9.13606 17.7648 9.26423 17.6567 9.37216C17.5488 9.4802 17.4207 9.5659 17.2796 9.62438C17.1385 9.68286 16.9873 9.71297 16.8346 9.71297C16.6819 9.71297 16.5307 9.68286 16.3896 9.62438C16.2485 9.5659 16.1204 9.4802 16.0124 9.37216L9.20289 2.5626L1.98082 9.78467C1.8729 9.89272 1.74474 9.97842 1.60367 10.0369C1.4626 10.0954 1.31136 10.1255 1.15865 10.1255C1.00594 10.1255 0.854736 10.0954 0.713667 10.0369C0.572598 9.97842 0.444445 9.89272 0.336523 9.78467C0.228479 9.67675 0.142792 9.5486 0.0843124 9.40753C0.0258331 9.26646 -0.00427437 9.11524 -0.00427437 8.96253C-0.00427437 8.80982 0.0258331 8.65861 0.0843124 8.51754C0.142792 8.37647 0.228479 8.24832 0.336523 8.1404L7.97113 0.505783C8.29796 0.179365 8.74098 -0.00397396 9.20289 -0.00397396C9.66481 -0.00397396 10.1078 0.179365 10.4347 0.505783Z"
                  fill="white"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="11"
                viewBox="0 0 18 11"
                fill="none"
              >
                <g clip-path="url(#clip0_777_151)">
                  <path
                    d="M7.55888 9.61568L0.336803 2.3936C0.228761 2.28568 0.143036 2.15751 0.0845574 2.01644C0.0260785 1.87537 -0.00402832 1.72416 -0.00402832 1.57145C-0.00402832 1.41874 0.0260785 1.26754 0.0845574 1.12647C0.143036 0.985398 0.228761 0.857227 0.336803 0.749305C0.444725 0.641262 0.572879 0.555556 0.713948 0.497077C0.855018 0.438598 1.00622 0.408491 1.15893 0.408491C1.31164 0.408491 1.46285 0.438598 1.60392 0.497077C1.74499 0.555556 1.87318 0.641262 1.9811 0.749305L8.79064 7.55886L16.0127 0.336785C16.1206 0.228743 16.2488 0.143036 16.3899 0.0845574C16.5309 0.0260785 16.6822 -0.00402832 16.8349 -0.00402832C16.9876 -0.00402832 17.1388 0.0260785 17.2799 0.0845574C17.4209 0.143036 17.5491 0.228743 17.657 0.336785C17.7651 0.444708 17.8507 0.572861 17.9092 0.713931C17.9677 0.855 17.9978 1.00622 17.9978 1.15893C17.9978 1.31164 17.9677 1.46285 17.9092 1.60392C17.8507 1.74499 17.7651 1.87314 17.657 1.98106L10.0224 9.61568C9.69557 9.94209 9.25255 10.1254 8.79064 10.1254C8.32872 10.1254 7.8857 9.94209 7.55888 9.61568Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_777_151">
                    <rect width="18" height="10.1272" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            )}
          </span>
        </div>
        {isOpen && (
          <div
            className={`accordion-content ${isOpen ? "expanded" : ""}`}
            style={{ background: "#FFF" }}
          >
            {/* <p>{content}</p> */}
            <div className="container-fluid">
              <div className="sustainability-page-section-3 ">
                <div className="container">
                  <div className="row">
                    <div className="col-sm text-center sustain_Hållbar sustainability-page-section-3-card">
                      <img
                        style={{ width: "200px", height: "200px" }}
                        src={
                          process.env.PUBLIC_URL + "/images/Economic_Growth.png"
                        }
                      />
                      <br />
                      <div style={{ textAlign: "center" }}>
                        <h4>
                          Hållbar energi för alla
                          <br />
                        </h4>
                        <p className="text-center">
                          Genom att integrera solenergilösningar och
                          energieffektiviseringsmetoder i våra installationer,
                          arbetar vi för att göra hållbar energi tillgänglig och
                          överkomlig.
                        </p>
                      </div>
                    </div>
                    <div className="col"></div>
                    <div className="col-sm text-center sustainability-page-section-3-card">
                      <img
                        style={{ width: "200px", height: "200px" }}
                        src={
                          process.env.PUBLIC_URL + "/images/Economic_Growth.png"
                        }
                      />
                      <div style={{ textAlign: "center" }}>
                        <h4>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="58"
                            height="58"
                            viewBox="0 0 58 58"
                            fill="none"
                            className="sus-arrow-icon"
                          >
                            <path
                              d="M29.0002 53.1668C42.347 53.1668 53.1668 42.347 53.1668 29.0002C53.1668 15.6533 42.347 4.8335 29.0002 4.8335C15.6533 4.8335 4.8335 15.6533 4.8335 29.0002C4.8335 42.347 15.6533 53.1668 29.0002 53.1668Z"
                              stroke="#00354E"
                              stroke-width="1.28583"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M28.9999 38.6663L38.6666 28.9997M38.6666 28.9997L28.9999 19.333M38.6666 28.9997H19.3333"
                              stroke="#00354E"
                              stroke-width="1.28583"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          Anständiga arbetsvillkor och ekonomisk tillväxt
                          <br />
                        </h4>
                        <p>
                          Vi satsar på att vara en ansvarsfull arbetsgivare som
                          främjar säkra arbetsförhållanden, samt stödjer
                          kontinuerlig utbildning och utveckling av våra
                          medarbetare.
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm text-center sustainability-page-section-3-card">
                      <img
                        style={{ width: "200px", height: "200px" }}
                        src={process.env.PUBLIC_URL + "/images/DALL_E.png"}
                      />
                      <div style={{ width: "100%", textAlign: "center" }}>
                        <h4>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="58"
                            height="58"
                            viewBox="0 0 58 58"
                            fill="none"
                            className="sus-arrow-icon"
                          >
                            <path
                              d="M29.0002 53.1668C42.347 53.1668 53.1668 42.347 53.1668 29.0002C53.1668 15.6533 42.347 4.8335 29.0002 4.8335C15.6533 4.8335 4.8335 15.6533 4.8335 29.0002C4.8335 42.347 15.6533 53.1668 29.0002 53.1668Z"
                              stroke="#00354E"
                              stroke-width="1.28583"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M28.9999 38.6663L38.6666 28.9997M38.6666 28.9997L28.9999 19.333M38.6666 28.9997H19.3333"
                              stroke="#00354E"
                              stroke-width="1.28583"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          Industri, innovation och infrastruktur
                          <br />
                        </h4>
                        <p>
                          Vi bidrar till byggandet av motståndskraftig
                          infrastruktur och främjar inkluderande, hållbar
                          industrialisering genom att använda oss av innovativa,
                          hållbara tekniska lösningar.
                          <br />
                        </p>
                      </div>
                    </div>
                    <div className="col"></div>
                    <div className="col-sm text-center sustainability-page-section-3-card">
                      <img
                        style={{ width: "200px", height: "200px" }}
                        src={process.env.PUBLIC_URL + "/images/DALL_4.png"}
                      />
                      <div style={{ width: "100%", textAlign: "center" }}>
                        <h4>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="58"
                            height="58"
                            viewBox="0 0 58 58"
                            fill="none"
                            className="sus-arrow-icon"
                          >
                            <path
                              d="M29.0002 53.1668C42.347 53.1668 53.1668 42.347 53.1668 29.0002C53.1668 15.6533 42.347 4.8335 29.0002 4.8335C15.6533 4.8335 4.8335 15.6533 4.8335 29.0002C4.8335 42.347 15.6533 53.1668 29.0002 53.1668Z"
                              stroke="#00354E"
                              stroke-width="1.28583"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M28.9999 38.6663L38.6666 28.9997M38.6666 28.9997L28.9999 19.333M38.6666 28.9997H19.3333"
                              stroke="#00354E"
                              stroke-width="1.28583"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          Hållbara städer och samhällen
                          <br />
                        </h4>
                        <p>
                          Genom vårt arbete med att utveckla, bygga nya &
                          renovera fastigheter samt infrastruktur strävar vi
                          efter att skapa och underhålla gröna och tillgängliga
                          urbana områden.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div className="col"></div>
                    <div class="col-sm text-center  sustainability-page-section-3-card">
                      <img
                        style={{ width: "200px", height: "200px" }}
                        src={process.env.PUBLIC_URL + "/images/DALL_5.png"}
                      />
                      <div style={{ textAlign: "center" }}>
                        <h4>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="58"
                            height="58"
                            viewBox="0 0 58 58"
                            fill="none"
                            className="sus-arrow-icon"
                          >
                            <path
                              d="M29.0002 53.1668C42.347 53.1668 53.1668 42.347 53.1668 29.0002C53.1668 15.6533 42.347 4.8335 29.0002 4.8335C15.6533 4.8335 4.8335 15.6533 4.8335 29.0002C4.8335 42.347 15.6533 53.1668 29.0002 53.1668Z"
                              stroke="#00354E"
                              stroke-width="1.28583"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M28.9999 38.6663L38.6666 28.9997M38.6666 28.9997L28.9999 19.333M38.6666 28.9997H19.3333"
                              stroke="#00354E"
                              stroke-width="1.28583"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          Bekämpa klimatförändringarna
                          <br />
                        </h4>
                        <p
                          style={{
                            color: "black",
                            fontSize: 20,
                            fontFamily: "Inter",
                            fontWeight: "400",
                            lineHeight: 2,
                            wordWrap: "break-word",
                          }}
                        >
                          Vårt engagemang för att minska koldioxidutsläpp och
                          vår inriktning på klimatanpassning i alla våra projekt
                          reflekterar vårt bidrag till kampen mot
                          klimatförändringar.
                        </p>
                      </div>
                    </div>
                    <div className="col"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Accordion1;