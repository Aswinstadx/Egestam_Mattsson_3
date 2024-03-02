import React, { useEffect, useState } from "react";

function Section6() {
  const [isIpad, setIsIpad] = useState(false);
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

  useEffect(() => {
    const handleResize = () => {
      setIsIpad(window.innerWidth <= 1024 && window.innerWidth >= 600); // Assuming iPad width is less than or equal to 768px
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="section6">
      <div className="container">
        <h2>
          {isMobile && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="32"
              viewBox="0 0 31 32"
              fill="none"
            >
              <path
                d="M15.43 28.8585C22.5315 28.8585 28.2883 23.1016 28.2883 16.0002C28.2883 8.89872 22.5315 3.14185 15.43 3.14185C8.32853 3.14185 2.57166 8.89872 2.57166 16.0002C2.57166 23.1016 8.32853 28.8585 15.43 28.8585Z"
                stroke="#00354E"
                stroke-width="1.28583"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.43 21.1434L20.5733 16M20.5733 16L15.43 10.8567M20.5733 16H10.2866"
                stroke="#00354E"
                stroke-width="1.28583"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}{" "}
          Nyheter
        </h2>
        {isIpad || (window.innerWidth >= 1025 && window.innerWidth < 1500) ? (
          <>
            <div className="container">
              <div className="row mt-3">
                <div className="col-md-6 col-6">
                  <div className="card-sm odd-card">
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
                        Med teknikens framsteg utrustas fastigheter med
                        avancerade funktioner. Grundläggande system såsom el,
                        VVS, uppvärmning, kylning, ventilation, belysning,
                        brandskydd, säkerhet och låssystem kompletteras nu med
                        smarta lösningar. Digitalisering och hållbarhet leder
                        utvecklingen med automation, effektiv energianvändning,
                        solenergisystem och laddningsstationer för eldrivna
                        fordon, vilket speglas i vår strävan efter att skapa
                        integrerade, energieffektiva byggnader. Läs mer om hur
                        vi kan hjälpa dig som fastighetsägare till en optimerad
                        miljö.
                      </p>
                    </div>
                    <div style={{ float: "right" }} className="more-arrow">
                      Läs mer {">>"}
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-6">
                  <div className="card-sm even-card">
                    <img
                      src={process.env.PUBLIC_URL + "/images/card2-im.png"}
                      className="card-im"
                    />
                    <div className="card-content mt-3">
                      <h6 className="place">nyheter</h6>
                      <h6 className="date">2023-11-21 08:00</h6>
                      <h4 className="title">
                        Elektrifiering och framtidssäkring
                      </h4>
                      <h6 className="more-text">
                        Egestam och Mattsson leder vägen i digitaliseringens era
                      </h6>
                      <p
                        className="second-p"
                        style={{ top: "-10px", position: "relative" }}
                      >
                        I en tid där digitalisering och teknologisk innovation
                        formar vårt samhälle, lägger Egestam och Mattsson stor
                        vikt vid att ständigt vara i framkant. Med insikt om de
                        framväxande trenderna - ökad elkonsumtion, ett starkare
                        hållbarhetsfokus, och digitalisering - förstår Egestam &
                        Mattsson vikten av att kontinuerligt kompetensutveckla
                        sin personal. Genom att investera i utbildning och
                        specialisering inom områden som integrerade system och
                        effektiva energilösningar, positionerar Egestam och
                        Mattsson sig för att möta marknadens behov och vara en
                        nyckelaktör i att forma en mer hållbar och effektiv
                        framtid.
                      </p>
                    </div>
                    <div style={{ float: "right" }} className="more-arrow">
                      Läs mer {">>"}
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-6">
                  <div className="card-sm odd-card">
                    <img
                      src={process.env.PUBLIC_URL + "/images/card3-im.png"}
                      className="card-im"
                    />
                    <div className="card-content mt-3 no-date">
                      <h6 className="place"></h6>
                      <h6 className="date"></h6>
                      <h4 className="title">Vinnare av DI-GASELL</h4>
                      <h6 className="more-text">
                        Egestam och Mattsson utmärker sig återigen
                      </h6>
                      <p style={{ top: "0px", position: "relative" }}>
                        Egestam och Mattsson har än en gång bevisat sin förmåga
                        att överträffa marknadens förväntningar genom att vinna
                        det prestigefyllda DI-Gasell-priset. Denna utmärkelse,
                        som ges till Sveriges snabbast växande företag, speglar
                        deras konsekventa tillväxt och framgång i branschen.
                        Genom att fokusera på innovation, kundservice och
                        hållbarhet, har Egestam och Mattsson inte bara
                        förbättrat sin marknadsposition utan också bidragit till
                        positiva samhällsförändringar. Denna prestation betonar
                        vår starka drivkraft och engagemang för att
                        kontinuerligt utvecklas och leda vägen inom el- och
                        datanätverksinstallation.
                      </p>
                      <div style={{ float: "right" }} className="more-arrow">
                        Läs mer {">>"}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-6">
                  <div className="card-sm even-card">
                    <img
                      src={process.env.PUBLIC_URL + "/images/card3-im.png"}
                      className="card-im"
                    />
                    <div className="card-content mt-3 no-date">
                      <h6 className="place"></h6>
                      <h6 className="date"></h6>
                      <h4 className="title">Vinnare av DI-GASELL</h4>
                      <h6 className="more-text">
                        Egestam och Mattsson utmärker sig återigen
                      </h6>
                      <p style={{ top: "0px", position: "relative" }}>
                        Egestam och Mattsson har än en gång bevisat sin förmåga
                        att överträffa marknadens förväntningar genom att vinna
                        det prestigefyllda DI-Gasell-priset. Denna utmärkelse,
                        som ges till Sveriges snabbast växande företag, speglar
                        deras konsekventa tillväxt och framgång i branschen.
                        Genom att fokusera på innovation, kundservice och
                        hållbarhet, har Egestam och Mattsson inte bara
                        förbättrat sin marknadsposition utan också bidragit till
                        positiva samhällsförändringar. Denna prestation betonar
                        vår starka drivkraft och engagemang för att
                        kontinuerligt utvecklas och leda vägen inom el- och
                        datanätverksinstallation.
                      </p>
                      <div style={{ float: "right" }} className="more-arrow">
                        Läs mer {">>"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {" "}
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
                      funktioner. Grundläggande system såsom el, VVS,
                      uppvärmning, kylning, ventilation, belysning, brandskydd,
                      säkerhet och låssystem kompletteras nu med smarta
                      lösningar. Digitalisering och hållbarhet leder
                      utvecklingen med automation, effektiv energianvändning,
                      solenergisystem och laddningsstationer för eldrivna
                      fordon, vilket speglas i vår strävan efter att skapa
                      integrerade, energieffektiva byggnader. Läs mer om hur vi
                      kan hjälpa dig som fastighetsägare till en optimerad
                      miljö.
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
                    <h4 className="title">
                      Elektrifiering och framtidssäkring
                    </h4>
                    <h6 className="more-text">
                      Egestam och Mattsson leder vägen i digitaliseringens era
                    </h6>
                    <p
                      className="second-p"
                      style={{ top: "-10px", position: "relative" }}
                    >
                      I en tid där digitalisering och teknologisk innovation
                      formar vårt samhälle, lägger Egestam och Mattsson stor
                      vikt vid att ständigt vara i framkant. Med insikt om de
                      framväxande trenderna - ökad elkonsumtion, ett starkare
                      hållbarhetsfokus, och digitalisering - förstår Egestam &
                      Mattsson vikten av att kontinuerligt kompetensutveckla sin
                      personal. Genom att investera i utbildning och
                      specialisering inom områden som integrerade system och
                      effektiva energilösningar, positionerar Egestam och
                      Mattsson sig för att möta marknadens behov och vara en
                      nyckelaktör i att forma en mer hållbar och effektiv
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
                    <h4 className="title">Vinnare av DI-GASELL</h4>
                    <h6 className="more-text">
                      Egestam och Mattsson utmärker sig återigen
                    </h6>
                    <p style={{ top: "0px", position: "relative" }}>
                      Egestam och Mattsson har än en gång bevisat sin förmåga
                      att överträffa marknadens förväntningar genom att vinna
                      det prestigefyllda DI-Gasell-priset. Denna utmärkelse, som
                      ges till Sveriges snabbast växande företag, speglar deras
                      konsekventa tillväxt och framgång i branschen. Genom att
                      fokusera på innovation, kundservice och hållbarhet, har
                      Egestam och Mattsson inte bara förbättrat sin
                      marknadsposition utan också bidragit till positiva
                      samhällsförändringar. Denna prestation betonar vår starka
                      drivkraft och engagemang för att kontinuerligt utvecklas
                      och leda vägen inom el- och datanätverksinstallation.
                    </p>
                    <div style={{ float: "right" }} className="more-arrow">
                      Läs mer {">>"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Section6;
