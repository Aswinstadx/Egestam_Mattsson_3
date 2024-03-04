import React, { useEffect, useState } from "react";

import Section6 from "../Sections/Section6";
import Banner from "../Components/CmsPage/Banner";
import MobileFooter from "../Components/Footer/MobileFooter";
import Footer from "../Components/Footer/Footer";
import RelatedNews from "../Sections/RelatedNews";

function NewsDetailsScreen() {
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
      <Banner />
      <div className="container news-details">
        <h4>
          Eftersom energikostnaden är löpande blir energioptimering en
          investering både för dig och för miljön. Genom att underhålla,
          uppgradera och digitalisera fastigheter kan vi minska din
          energianvändning. Här gå vi igenom hur vi arbetar med förslag på
          lösningar och göra konkreta insatser.   
        </h4>
        <div className="news-details-content">
          <ul>
            <li>
              <h5>Hållbarhetsfokus</h5>
              <p>
                För oss på Egestam & Mattsson är hållbarhet central i allt vi
                gör. Vi tror på att ta ett helhetsgrepp om fastigheters
                energiförbrukning och minimera deras miljöpåverkan. Genom att
                erbjuda energieffektiva elinstallationer bidrar vi aktivt till
                att skapa en mer hållbar framtid för kommande generationer.
              </p>
            </li>

            <li>
              <h5>Avancerad teknik</h5>
              <p>
                Vårt arbete med energieffektiva lösningar bygger på användningen
                av avancerad teknik. Vi integrerar moderna system och
                intelligent automatisering för att optimera energiförbrukningen.
                Det inkluderar smarta sensorer, tidstyrda system och avancerad
                övervakning.
              </p>
            </li>

            <li>
              <h5>Solenergi och Elbilsladdning</h5>
              <p>
                Solenergi är en viktig del av vårt arbete med att minska
                elinstallationers klimatavtryck. Genom att integrera solpaneler
                i fastighetens elsystem kan vi producera ren och förnybar
                energi. Dessutom erbjuder vi lösningar för laddningsstationer
                för eldrivna fordon, vilket främjar övergången till miljövänliga
                transportalternativ.
              </p>
            </li>

            <li>
              <h5>Optimering och Uppföljning</h5>
              <p>
                Efter att våra energieffektiva elinstallationer är på plats
                slutar vårt arbete inte där. Vi strävar efter att optimera och
                följa upp systemen kontinuerligt. Det innebär att vi kan
                identifiera och åtgärda ineffektiviteter i realtid, vilket leder
                till minskad energiförbrukning och minskade kostnader för
                fastighetsägarna.
              </p>
            </li>

            <li>
              <h5>Kundanpassade lösningar</h5>
              <p>
                Varje fastighet är unik, och vi förstår vikten av att skapa
                skräddarsydda lösningar. Vårt team samarbetar nära med våra
                kunder för att förstå deras specifika behov och önskemål. Vi
                anpassar våra energieffektiva elinstallationer för att passa
                varje projekt och maximera dess potential för hållbarhet.
              </p>
            </li>

            <li>
              <h5>En hållbar framtid</h5>
              <p>
                Egestam & Mattsson är stolta över att vara en del av lösningen
                när det gäller att främja energieffektivitet och hållbarhet.
                Genom vårt arbete med energieffektiva elinstallationer gör vi
                det möjligt för fastighetsägare att minska sin miljöpåverkan och
                dra nytta av kostnadsbesparingar på lång sikt. Med teknikens
                framsteg och vår kompetens fortsätter vi att sträva efter att
                skapa en framtid där elinstallationer är både kraftfulla och
                miljövänliga. Vi är fast beslutna att vara en pålitlig partner i
                arbetet mot en hållbarare planet. Kontakta oss idag för att lära
                dig mer om hur våra energieffektiva elinstallationer kan gynna
                din fastighet och samtidigt minska din miljöpåverkan. Egestam &
                Mattsson är redo att ta dig mot en mer hållbar framtid. 
              </p>
            </li>
          </ul>
        </div>

        {/* <Section6 /> */}
      </div>

      {/* {isMobile && (
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
      )} */}
      <div className="related-news-section-6-div">
        <RelatedNews />
        <Section6 />
      </div>
    </div>
  );
}

export default NewsDetailsScreen;
