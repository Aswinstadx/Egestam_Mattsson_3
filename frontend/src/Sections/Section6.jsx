import React from "react";

function Section6() {
  return (
    <div className="section6">
      <div className="container">
        <h2>Nyheter</h2>
        <div className="row mt-3">
          <div className="col-md-4">
            <div className="card-sm">
              <img
                src={process.env.PUBLIC_URL + "/images/card1-im.png"}
                className="card-im"
              />
              <div className="card-content mt-3">
                <h6 className="place">nyheter</h6>
                <h6 className="date">2023-11-21 08:00</h6>
                <h4 className="title">
                  Optimerade miljöer för ett hållbart liv
                </h4>
                <p>
                  Med teknikens framsteg utrustas fastigheter med avancerade
                  funktioner. Grundläggande system såsom el, VVS, uppvärmning,
                  kylning, ventilation, belysning, brandskydd, säkerhet och
                  låssystem kompletteras nu med smarta lösningar. Digitalisering
                  och hållbarhet leder utvecklingen med automation, effektiv
                  energianvändning, solenergisystem och laddningsstationer för
                  eldrivna fordon, vilket speglas i vår strävan efter att skapa
                  integrerade, energieffektiva byggnader. Läs mer om hur vi kan
                  hjälpa dig som fastighetsägare till en optimerad miljö.
                </p>
              </div>
              <div style={{ float: "right" }} className="more-arrow">
                Läs mer {">>"}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-sm">
              <img
                src={process.env.PUBLIC_URL + "/images/card2-im.png"}
                className="card-im"
              />
              <div className="card-content mt-3">
                <h6 className="place">nyheter</h6>
                <h6 className="date">2023-11-21 08:00</h6>
                <h4 className="title">Elektrifiering och framtidssäkring</h4>
                <h6 className="more-text">
                  Egestam och Mattsson leder vägen i digitaliseringens era
                </h6>
                <p
                  className="second-p"
                  style={{ top: "-10px", position: "relative" }}
                >
                  I en tid där digitalisering och teknologisk innovation formar
                  vårt samhälle, lägger Egestam och Mattsson stor vikt vid att
                  ständigt vara i framkant. Med insikt om de framväxande
                  trenderna - ökad elkonsumtion, ett starkare hållbarhetsfokus,
                  och digitalisering - förstår Egestam & Mattsson vikten av att
                  kontinuerligt kompetensutveckla sin personal. Genom att
                  investera i utbildning och specialisering inom områden som
                  integrerade system och effektiva energilösningar, positionerar
                  Egestam och Mattsson sig för att möta marknadens behov och
                  vara en nyckelaktör i att forma en mer hållbar och effektiv
                  framtid.
                </p>
              </div>
              <div style={{ float: "right" }} className="more-arrow">
                Läs mer {">>"}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-sm">
              <img
                src={process.env.PUBLIC_URL + "/images/card3-im.png"}
                className="card-im"
              />
              <div className="card-content mt-3 no-date">
                <h6 className="place"></h6>
                <h6 className="date"></h6>
                <h4 className="title">
                  Optimerade miljöer för ett hållbart liv
                </h4>
                <h6 className="more-text">
                  Egestam och Mattsson utmärker sig återigen
                </h6>
                <p  style={{ top: "0px", position: "relative" }}>
                  Med teknikens framsteg utrustas fastigheter med avancerade
                  funktioner. Grundläggande system såsom el, VVS, uppvärmning,
                  kylning, ventilation, belysning, brandskydd, säkerhet och
                  låssystem kompletteras nu med smarta lösningar. Digitalisering
                  och hållbarhet leder utvecklingen med automation, effektiv
                  energianvändning, solenergisystem och laddningsstationer för
                  eldrivna fordon, vilket speglas i vår strävan efter att skapa
                  integrerade, energieffektiva byggnader. Läs mer om hur vi kan
                  hjälpa dig som fastighetsägare till en optimerad miljö.
                </p>
                <div style={{ float: "right" }} className="more-arrow">
                  Läs mer {">>"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section6;
