import React from "react";
import Header from "../Components/Header/Header";
import ReactPlayer from "react-player";
import { BANNER_VIDEO, SUSTAINABILITY_PAGE_IMAGE } from "../Constants/urls";
import Footer from "../Components/Footer/Footer";
import Banner from "../Components/Banner/Banner";
import "./Sustainability.css";

function Sustainability() {
  return (
    <div>
      <div>
        <Header />
        <Banner />

        <div className="section_sustain">
          <div className="container ">
            <p>
              Egestam och Mattsson har en hållbarhetsvision som sträcker sig
              till 2045, där målet är att nå netto noll utsläpp. Vi ser
              hållbarhet som kärnan i vår verksamhet och ett grundläggande
              åtagande i allt vi gör. Varje femårsperiod fram till 2045 innebär
              nya delmål och strategier som är anpassade för att gradvis föra
              oss närmare vår ambition om ett klimatneutralt samhälle.
            </p>
          </div>
        </div>

        <div className="climatgoal_heading">
          {/* <div style={{ width: "100%", height: "100%", background: "#89BF50" }}>
            <div
              style={{
                width: "100%",
                height: "100%",
                textAlign: "center",
                color: "white",
                fontSize: 64,
                fontFamily: "Inter",
                fontWeight: "700",
                lineHeight: 2,
                wordWrap: "break-word",
              }}
            >
              Våra klimatmål
            </div>
          </div> */}
          <div>
            <h2 className="text-center">Våra klimatmål</h2>
          </div>
        </div>

        <div className="sustainabiliy-page-section-2">
          <div className="container">
            <div className="text-center">
              <img
                src={process.env.PUBLIC_URL + "/images/card1-im.png"}
                className="card-im mt-4"
              />
            </div>
            <div className="row">
              <div className="col-md-6 text-center sustainability-card">
                <h4> 2030 Reduktion och Innovation</h4>
                <p>
                  Inom de kommande åren sätter vi fokus på att minska våra
                  CO2-utsläpp med 20% från 2020 års nivåer. Vi kommer att
                  investera i innovativa teknologier och arbetsmetoder som
                  minskar vårt klimatavtryck och ökar energieffektiviteten i de
                  fastigheter vi arbetar med.
                </p>
              </div>
              <div className="col-md-6 text-center sustainability-card">
                <h4> 2030 Reduktion och Innovation</h4>
                <p>
                  Inom de kommande åren sätter vi fokus på att minska våra
                  CO2-utsläpp med 20% från 2020 års nivåer. Vi kommer att
                  investera i innovativa teknologier och arbetsmetoder som
                  minskar vårt klimatavtryck och ökar energieffektiviteten i de
                  fastigheter vi arbetar med.
                </p>
              </div>
              <div className="col-md-6 text-center sustainability-card">
                <h4> 2030 Reduktion och Innovation</h4>
                <p>
                  Inom de kommande åren sätter vi fokus på att minska våra
                  CO2-utsläpp med 20% från 2020 års nivåer. Vi kommer att
                  investera i innovativa teknologier och arbetsmetoder som
                  minskar vårt klimatavtryck och ökar energieffektiviteten i de
                  fastigheter vi arbetar med.
                </p>
              </div>
              <div className="col-md-6 text-center sustainability-card">
                <h4> 2030 Reduktion och Innovation</h4>
                <p>
                  Inom de kommande åren sätter vi fokus på att minska våra
                  CO2-utsläpp med 20% från 2020 års nivåer. Vi kommer att
                  investera i innovativa teknologier och arbetsmetoder som
                  minskar vårt klimatavtryck och ökar energieffektiviteten i de
                  fastigheter vi arbetar med.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="climatgoal_heading-2">
          <div>
            <h2 className="text-center">Hur vi bidrar till de Globala Målen</h2>
          </div>
        </div>

        <div className="sustainability-page-section-3 ">
          <div className="container">
            <div className="row">
              <div className="col-sm text-center sustain_Hållbar sustainability-page-section-3-card">
                <img
                  style={{ width: "200px", height: "200px" }}
                  src={process.env.PUBLIC_URL + "/images/Economic_Growth.png"}
                />
                <br />
                <div style={{ textAlign: "center" }}>
                  <h4>
                    Hållbar energi för alla
                    <br />
                  </h4>
                  <p>
                    Genom att integrera solenergilösningar och
                    energieffektiviseringsmetoder i våra installationer, arbetar
                    vi för att göra hållbar energi tillgänglig och överkomlig.
                  </p>
                </div>
              </div>
              <div className="col"></div>
              <div className="col-sm text-center sustainability-page-section-3-card">
                <img
                  style={{ width: "200px", height: "200px" }}
                  src={process.env.PUBLIC_URL + "/images/Economic_Growth.png"}
                />
                <div style={{ textAlign: "center" }}>
                  <h4>
                    Anständiga arbetsvillkor och ekonomisk tillväxt
                    <br />
                  </h4>
                  <p>
                    Vi satsar på att vara en ansvarsfull arbetsgivare som
                    främjar säkra arbetsförhållanden, samt stödjer kontinuerlig
                    utbildning och utveckling av våra medarbetare.
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
                    Industri, innovation och infrastruktur
                    <br />
                  </h4>
                  <p>
                    Vi bidrar till byggandet av motståndskraftig infrastruktur
                    och främjar inkluderande, hållbar industrialisering genom
                    att använda oss av innovativa, hållbara tekniska lösningar.
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
                    Hållbara städer och samhällen
                    <br />
                  </h4>
                  <p>
                    Genom vårt arbete med att utveckla, bygga nya & renovera
                    fastigheter samt infrastruktur strävar vi efter att skapa
                    och underhålla gröna och tillgängliga urbana områden.
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
                  <h4
                    style={{
                      color: "black",
                      fontSize: 20,
                      fontFamily: "Inter",
                      fontWeight: "700",
                      lineHeight: 2,
                      wordWrap: "break-word",
                    }}
                  >
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
                    Vårt engagemang för att minska koldioxidutsläpp och vår
                    inriktning på klimatanpassning i alla våra projekt
                    reflekterar vårt bidrag till kampen mot klimatförändringar.
                  </p>
                </div>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </div>

        <div className="sustainability-page-section-4 sustainable-container ">
          <img src={SUSTAINABILITY_PAGE_IMAGE} />
          <div className="sustainable-overlay">
            <h4 >
              Optimerade miljöer för ett hållbart liv
            </h4>
            <p>
              Med teknikens framsteg utrustas fastigheter med avancerade
              funktioner. Grundläggande system såsom el, VVS, uppvärmning,
              kylning, ventilation, belysning, brandskydd, säkerhet och
              låssystem kompletteras nu med smarta lösningar. Digitalisering och
              hållbarhet leder utvecklingen med automation, effektiv
              energianvändning, solenergisystem och laddningsstationer för
              eldrivna fordon, vilket speglas i vår strävan efter att skapa
              integrerade, energieffektiva byggnader. Läs mer om hur vi kan
              hjälpa dig som fastighetsägare till en optimerad miljö. Som
              experter inom el- och datanätverksinstallationer är vi dedikerade
              till att erbjuda lösningar som är både tekniskt avancerade och
              miljövänliga. Vi arbetar nära våra kunder för att uppnå deras
              specifika behov och önskemål, och vår målsättning är att skapa
              fastigheter som är optimalt utrustade för framtida krav.{" "}
            </p>
          </div>
        </div>

        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default Sustainability;
