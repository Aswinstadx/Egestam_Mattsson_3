import React, { useEffect, useState } from "react";
import "./Accordion.css"; // Import your CSS file
import "../../../Screens/Sustainability.css";

function Accordion1({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

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
            <h3 style={{ color: "#00354E" }}>Globala målen</h3>
          </div>
          <span className="accord-icon">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="11"
                viewBox="0 0 18 11"
                fill="none"
              >
                <path
                  d="M10.441 0.511581L17.6631 7.73366C17.7711 7.84158 17.8568 7.96975 17.9153 8.11082C17.9738 8.25189 18.0039 8.4031 18.0039 8.55581C18.0039 8.70852 17.9738 8.85972 17.9153 9.00079C17.8568 9.14186 17.7711 9.27003 17.6631 9.37795C17.5552 9.486 17.427 9.5717 17.2859 9.63018C17.1449 9.68866 16.9937 9.71877 16.8409 9.71877C16.6882 9.71877 16.537 9.68866 16.396 9.63018C16.2549 9.5717 16.1267 9.486 16.0188 9.37795L9.20924 2.5684L1.98717 9.79047C1.87924 9.89852 1.75109 9.98422 1.61002 10.0427C1.46895 10.1012 1.31771 10.1313 1.165 10.1313C1.01229 10.1313 0.861084 10.1012 0.720015 10.0427C0.578945 9.98422 0.450792 9.89852 0.342871 9.79047C0.234827 9.68255 0.149139 9.5544 0.0906601 9.41333C0.0321808 9.27226 0.00207329 9.12103 0.00207329 8.96832C0.00207329 8.81561 0.0321808 8.66441 0.0906601 8.52334C0.149139 8.38227 0.234827 8.25412 0.342871 8.14619L7.97748 0.511581C8.30431 0.185163 8.74733 0.00182438 9.20924 0.00182438C9.67115 0.00182438 10.1142 0.185163 10.441 0.511581Z"
                  fill="#00354E"
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
                <g clip-path="url(#clip0_1153_317)">
                  <path
                    d="M7.559 9.61568L0.336925 2.3936C0.228883 2.28568 0.143158 2.15751 0.0846794 2.01644C0.0262006 1.87537 -0.00390625 1.72416 -0.00390625 1.57145C-0.00390625 1.41874 0.0262006 1.26754 0.0846794 1.12647C0.143158 0.985398 0.228883 0.857227 0.336925 0.749305C0.444847 0.641262 0.573001 0.555556 0.71407 0.497077C0.85514 0.438598 1.00635 0.408491 1.15906 0.408491C1.31177 0.408491 1.46297 0.438598 1.60404 0.497077C1.74511 0.555556 1.8733 0.641262 1.98122 0.749305L8.79076 7.55886L16.0128 0.336785C16.1208 0.228743 16.2489 0.143036 16.39 0.0845574C16.531 0.0260785 16.6823 -0.00402832 16.835 -0.00402832C16.9877 -0.00402832 17.1389 0.0260785 17.28 0.0845574C17.4211 0.143036 17.5492 0.228743 17.6571 0.336785C17.7652 0.444708 17.8509 0.572861 17.9093 0.713931C17.9678 0.855 17.9979 1.00622 17.9979 1.15893C17.9979 1.31164 17.9678 1.46285 17.9093 1.60392C17.8509 1.74499 17.7652 1.87314 17.6571 1.98106L10.0225 9.61568C9.69569 9.94209 9.25267 10.1254 8.79076 10.1254C8.32885 10.1254 7.88582 9.94209 7.559 9.61568Z"
                    fill="#00354E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1153_317">
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
                {isMobile && (
                  <div className="mobile_text_only text-center">
                    <h4 className="text-center">
                      <span>Hållbar framtid en del ev vår affär</span> -Vår
                      policy för att bidra till de Globala Målen
                    </h4>
                  </div>
                )}
                <div className="container">
                  <div className="row">
                    <div className="col-sm text-center sustain_Hållbar sustainability-page-section-3-card">
                      <img
                        style={{ width: "200px", height: "200px" }}
                        src={process.env.PUBLIC_URL + "/images/sus_1.png"}
                      />
                      <br />
                      <div style={{ textAlign: "center" }}>
                        <h4 className="card_text_">
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
                        src={process.env.PUBLIC_URL + "/images/sus_2.png"}
                      />
                      <div style={{ textAlign: "center" }}>
                        <h4 className="card_text_">
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
                        src={process.env.PUBLIC_URL + "/images/sus3.png"}
                      />
                      <div style={{ width: "100%", textAlign: "center" }}>
                        <h4 className="card_text_">
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
                        src={process.env.PUBLIC_URL + "/images/sus_4.png"}
                      />
                      <div style={{ width: "100%", textAlign: "center" }}>
                        <h4 className="card_text_">
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
                        src={process.env.PUBLIC_URL + "/images/sus_5.png"}
                      />
                      <div style={{ textAlign: "center" }}>
                        <h4 className="card_text_">
                          klimatförändringarna
                          <br />
                        </h4>
                        <p>
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
