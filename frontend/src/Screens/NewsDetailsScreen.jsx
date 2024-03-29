import React, { useEffect, useState } from "react";
import Banner from "../Components/CmsPage/Banner";
import MobileFooter from "../Components/Footer/MobileFooter";
import Footer from "../Components/Footer/Footer";
import RelatedNews from "../Sections/RelatedNews";
import Section6 from "../Components/News/Section6";
import MobileOnlySust from "../Components/Sustainability/MobileOnlySust";
import Section1 from "../Sections/Section1/Section1";
import News from "../Components/News/News";

function NewsDetailsScreen() {
  const [isMobile, setIsMobile] = useState(false);
  const [isIpad, setIsIpad] = useState(false);
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
              <h5>Optimerad energieffektivitet</h5>
              <p>
                I en värld som ständigt strävar efter att minska sin
                klimatpåverkan är effektiv energianvändning en av de mest
                kritiska utmaningarna. Som ledande inom el- och
                datanätverksinstallationer har Egestam & Mattsson tagit på sig
                att vara en föregångare när det gäller att leverera
                energieffektiva lösningar för fastigheter och infrastruktur.
              </p>
            </li>

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
      <div
        className="related-news-section-6-div"
        style={{ backgroundColor: isMobile && "#EFF6E7" }}
      >
        {isIpad ? (
          <>
            <News />
          </>
        ) : (
          <>
            <RelatedNews />
            <Section6 />
          </>
        )}

        {isIpad && <>{console.log("This is ipad")}</>}
      </div>
      {isMobile && (
        <div style={{ marginTop: "10px" }}>
          <Section1 />
          <MobileOnlySust />
        </div>
      )}
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

export default NewsDetailsScreen;
