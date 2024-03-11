import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import ReactPlayer from "react-player";
import { BANNER_VIDEO, SUSTAINABILITY_PAGE_IMAGE } from "../Constants/urls";
import Footer from "../Components/Footer/Footer";
import Banner from "../Components/Banner/Banner";
import "./Sustainability.css";
import MobileFooter from "../Components/Footer/MobileFooter";
import Accordion from "../Components/Sustainability/Accordion/Accordion";
import Accordion1 from "../Components/Sustainability/Accordion/Accordion1";
import Accordion2 from "../Components/Sustainability/Accordion/Accordion2";
import Section1 from "../Sections/Section1/Section1";
import MobileOnlySust from "../Components/Sustainability/MobileOnlySust";
import SustainBanner from "../Components/Banner/SustainBanner";

function Sustainability() {
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
  return (
    <div>
      <div>
        <Header />
        {/* <Banner /> */}
        <SustainBanner />
        {!isMobile ? (
          <>
            <div className="section_sustain">
              <div className="container ">
                <p>
                  Egestam och Mattsson har en hållbarhetsvision som sträcker sig
                  till 2045, där målet är att nå netto noll utsläpp. Vi ser
                  hållbarhet som kärnan i vår verksamhet och ett grundläggande
                  åtagande i allt vi gör. Varje femårsperiod fram till 2045
                  innebär nya delmål och strategier som är anpassade för att
                  gradvis föra oss närmare vår ambition om ett klimatneutralt
                  samhälle.
                </p>
              </div>
            </div>

            <div className="climatgoal_heading">
              <div>
                <h2 className="text-center">Våra klimatmål</h2>
              </div>
            </div>

            <div className="sustainability-page-section-2_">
              <div className="text-center ">
                <img
                  src={process.env.PUBLIC_URL + "/images/card1-im.png"}
                  className="main_image"
                />
              </div>
              <div className="row p-5 mt-5">
                <div className="col-md-6 text-center">
                  <div className="container">
                    <div class=" card-2 text-center mb-3">
                      <div class="card-body">
                        <h5 class="card-title2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="39"
                            height="34"
                            viewBox="0 0 39 34"
                            fill="none"
                          >
                            <path
                              d="M19.5 31.8448C29.165 31.8448 37 25.1638 37 16.9224C37 8.68099 29.165 2 19.5 2C9.83502 2 2 8.68099 2 16.9224C2 25.1638 9.83502 31.8448 19.5 31.8448Z"
                              stroke="#00354E"
                              stroke-width="3"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M19.4998 22.8914L26.4998 16.9224M26.4998 16.9224L19.4998 10.9534M26.4998 16.9224H12.4998"
                              stroke="#00354E"
                              stroke-width="3"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <span style={{ marginLeft: "10px" }}>
                            2030
                            <br /> Reduktion och Innovation
                          </span>
                        </h5>
                        <p class="card-text2">
                          Inom de kommande åren sätter vi fokus på att minska
                          våra CO2-utsläpp med 20% från 2020 års nivåer. Vi
                          kommer att investera i innovativa teknologier och
                          arbetsmetoder som minskar vårt klimatavtryck och ökar
                          energieffektiviteten i de fastigheter vi arbetar med.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 text-center">
                  <div className="container">
                    <div class=" card-2 text-center mb-3">
                      <div class="card-body">
                        <h5 class="card-title2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="39"
                            height="34"
                            viewBox="0 0 39 34"
                            fill="none"
                          >
                            <path
                              d="M19.5 31.8448C29.165 31.8448 37 25.1638 37 16.9224C37 8.68099 29.165 2 19.5 2C9.83502 2 2 8.68099 2 16.9224C2 25.1638 9.83502 31.8448 19.5 31.8448Z"
                              stroke="#00354E"
                              stroke-width="3"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M19.4998 22.8914L26.4998 16.9224M26.4998 16.9224L19.4998 10.9534M26.4998 16.9224H12.4998"
                              stroke="#00354E"
                              stroke-width="3"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <span style={{ marginLeft: "10px" }}>
                            2035
                            <br /> Partnerskap och Ledarskap
                          </span>
                        </h5>
                        <p class="card-text2">
                          Till 2035 siktar vi på att hjälpa våra kunder att
                          minska deras utsläpp med 50 % jämfört med 2020,
                          samtidigt som vi uppnår samma minskning i vår egen
                          verksamhet. Vi kommer att fördjupa våra partnerskap
                          och ta en ledande roll i branschen för att driva på
                          den gröna omställningen.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 text-center mt-5">
                  <div className="container mt-5">
                    <div class=" card-2 text-center mb-3">
                      <div class="card-body">
                        <h5 class="card-title2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="39"
                            height="34"
                            viewBox="0 0 39 34"
                            fill="none"
                          >
                            <path
                              d="M19.5 31.8448C29.165 31.8448 37 25.1638 37 16.9224C37 8.68099 29.165 2 19.5 2C9.83502 2 2 8.68099 2 16.9224C2 25.1638 9.83502 31.8448 19.5 31.8448Z"
                              stroke="#00354E"
                              stroke-width="3"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M19.4998 22.8914L26.4998 16.9224M26.4998 16.9224L19.4998 10.9534M26.4998 16.9224H12.4998"
                              stroke="#00354E"
                              stroke-width="3"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <span style={{ marginLeft: "10px" }}>
                            2040
                            <br /> Förnyelse och Optimering
                          </span>
                        </h5>
                        <p class="card-text2">
                          Fram till 2040 kommer vårt arbete att fokusera på att
                          optimera användningen av förnybar energi och maximera
                          resurseffektiviteten i alla våra projekt. Vi strävar
                          efter att våra fastighetslösningar ska vara helt
                          självförsörjande när det gäller energi och minimera
                          avfall till nära noll.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 text-center mt-5">
                  <div className="container mt-5">
                    <div class=" card-2 text-center mb-3">
                      <div class="card-body">
                        <h5 class="card-title2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="39"
                            height="34"
                            viewBox="0 0 39 34"
                            fill="none"
                          >
                            <path
                              d="M19.5 31.8448C29.165 31.8448 37 25.1638 37 16.9224C37 8.68099 29.165 2 19.5 2C9.83502 2 2 8.68099 2 16.9224C2 25.1638 9.83502 31.8448 19.5 31.8448Z"
                              stroke="#00354E"
                              stroke-width="3"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M19.4998 22.8914L26.4998 16.9224M26.4998 16.9224L19.4998 10.9534M26.4998 16.9224H12.4998"
                              stroke="#00354E"
                              stroke-width="3"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <span style={{ marginLeft: "10px" }}>
                            2045
                            <br /> Netto noll
                          </span>
                        </h5>
                        <p class="card-text2">
                          Vår resa mot 2045 är inte bara en plan, det är ett
                          löfte om att aktivt forma en hållbar framtid där vi
                          och våra kunder tillsammans kan göra en verklig
                          skillnad. Vår slutdestination är en verksamhet med
                          netto noll utsläpp senast 2045. Vi kommer att ha fullt
                          integrerat hållbara principer, från design och
                          installation till underhåll och service.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="climatgoal_heading-2">
              <div>
                <h2 className="text-center">
                  Hur vi bidrar till de Globala Målen
                </h2>
              </div>
            </div>

            <div className="sustainability-page-section-3_ p-5 mt-5">
              <div className="row">
                <div className="col-md-6">
                  <div class="card text-center mb-3">
                    <div class="card-body">
                      <img src={process.env.PUBLIC_URL + "/images/sus_1.png"} />
                      <h5 class="card-title">Hållbar energi för alla</h5>
                      <p class="card-text">
                        Genom att integrera solenergilösningar och
                        energieffektiviseringsmetoder i våra installationer,
                        arbetar vi för att göra hållbar energi tillgänglig och
                        överkomlig.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 text-center">
                  <div class="card text-center mb-3">
                    <div class="card-body">
                      <img src={process.env.PUBLIC_URL + "/images/sus_2.png"} />
                      <h5 class="card-title">
                        {" "}
                        Anständiga arbetsvillkor och ekonomisk tillväxt
                      </h5>
                      <p class="card-text">
                        Vi satsar på att vara en ansvarsfull arbetsgivare som
                        främjar säkra arbetsförhållanden, samt stödjer
                        kontinuerlig utbildning och utveckling av våra
                        medarbetare.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 text-center">
                  <div class="card text-center mb-3 mt-5">
                    <div class="card-body">
                      <img src={process.env.PUBLIC_URL + "/images/sus3.png"} />
                      <h5 class="card-title">
                        {" "}
                        Industri, innovation och infrastruktur
                      </h5>
                      <p class="card-text">
                        Vi bidrar till byggandet av motståndskraftig
                        infrastruktur och främjar inkluderande, hållbar
                        industrialisering genom att använda oss av innovativa,
                        hållbara tekniska lösningar.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 text-center">
                  <div class="card text-center mb-3 mt-5">
                    <div class="card-body">
                      <img src={process.env.PUBLIC_URL + "/images/sus_4.png"} />
                      <h5 class="card-title">Hållbara städer och samhällen</h5>
                      <p class="card-text">
                        Genom vårt arbete med att utveckla, bygga nya & renovera
                        fastigheter samt infrastruktur strävar vi efter att
                        skapa och underhålla gröna och tillgängliga urbana
                        områden.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-4 text-center">
                  <div class="card text-center mb-3 mt-5">
                    <div class="card-body">
                      <img src={process.env.PUBLIC_URL + "/images/sus_5.png"} />
                      <h5 class="card-title">Bekämpa klimatförändringarna</h5>
                      <p class="card-text">
                        Vårt engagemang för att minska koldioxidutsläpp och vår
                        inriktning på klimatanpassning i alla våra projekt
                        reflekterar vårt bidrag till kampen mot
                        klimatförändringar.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4"></div>
              </div>
            </div>

            <div className="sustainability-page-section-4 sustainable-container ">
              {/* <img src={SUSTAINABILITY_PAGE_IMAGE} /> */}
              <div className="container">
                <div className="sustainable-overlay">
                  <div className="container">
                    <h4>Optimerade miljöer för ett hållbart liv</h4>
                    <p>
                      Med teknikens framsteg utrustas fastigheter med avancerade
                      funktioner. Grundläggande system såsom el, VVS,
                      uppvärmning, kylning, ventilation, belysning, brandskydd,
                      säkerhet och låssystem kompletteras nu med smarta
                      lösningar. Digitalisering och hållbarhet leder
                      utvecklingen med automation, effektiv energianvändning,
                      solenergisystem och laddningsstationer för eldrivna
                      fordon, vilket speglas i vår strävan efter att skapa
                      integrerade, energieffektiva byggnader. Läs mer om hur vi
                      kan hjälpa dig som fastighetsägare till en optimerad
                      miljö. Som experter inom el- och
                      datanätverksinstallationer är vi dedikerade till att
                      erbjuda lösningar som är både tekniskt avancerade och
                      miljövänliga. Vi arbetar nära våra kunder för att uppnå
                      deras specifika behov och önskemål, och vår målsättning är
                      att skapa fastigheter som är optimalt utrustade för
                      framtida krav.{" "}
                    </p>
                    <div style={{ float: "right" }} className="link">
                      {" "}
                      Läs mer {">>"}{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div style={{top:'-10px',position:'relative'}}>
            <Accordion />
            <Accordion1 />
            <Accordion2 />
            <Section1 />
            <MobileOnlySust />
          </div>
        )}

        {/* <footer>
          <Footer />
        </footer> */}
        <footer>
          {isMobile ? (
            <>
              <MobileFooter />
            </>
          ) : (
            <>
              <Footer />
            </>
          )}
        </footer>
      </div>
    </div>
  );
}

export default Sustainability;
