import React, { useEffect, useState } from "react";

function Section9() {
  const [isIpad, setIsIpad] = useState(false);

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1084);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      // setIsIpad(
      //   (window.innerWidth <= 1366 && window.innerWidth >= 820) ||
      //     (window.innerWidth <= 1180 && window.innerWidth >= 820)
      // );

      setIsIpad(window.innerWidth <= 1024 && window.innerWidth >= 600);
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
      {isMobile ? (
        <>
          <div className="text-center container-fluid mt-5 mobile-view">
            <img className="w-100" src={process.env.PUBLIC_URL + "/adv.png"} />
            <p className="mt-5">
              Egestam och Mattsson har antagit en policy som aktivt stödjer de
              globala målen för hållbar utveckling. Denna policy innefattar
              åtaganden att minska miljöpåverkan från verksamheten, främja
              energieffektivitet i alla projekt, och bidra till att bygga
              hållbara samhällen. Företaget strävar efter att integrera hållbara
              metoder i alla aspekter av vår affärsmodell, från design och
              installation till drift och underhåll. Genom att arbeta nära med
              kunder och samarbetspartners, siktar Egestam och Mattsson på att
              vara en drivkraft för positiv förändring och innovation inom sitt
              område, i linje med de globala hållbarhetsmålen.
            </p>
            <button className="text-center">Hållbarhet</button>
          </div>
        </>
      ) : !isIpad ? (
        <>
          <div className="div section9">
            <div className="div-2">
              <div className="column">
                <div className="div-3">
                  <div className="div-4">Vi gör skillnad</div>
                  <div className="div-5">
                    Egestam & Mattsson satsar på en hållbar affär
                  </div>
                  <div className="div-6">
                    Hållbar framtid en del ev vår affär vår policy för att bidra
                    till de Globala Målen
                  </div>
                  <div className="div-7">
                    Egestam och Mattsson har antagit en policy som aktivt
                    stödjer de globala målen för hållbar utveckling. Denna
                    policy innefattar åtaganden att minska miljöpåverkan från
                    verksamheten, främja energieffektivitet i alla projekt, och
                    bidra till att bygga hållbara samhällen. Företaget strävar
                    efter att integrera hållbara metoder i alla aspekter av sin
                    affärsmodell, från design och installation till drift och
                    underhåll. Genom att arbeta nära med kunder och
                    samarbetspartners, siktar Egestam och Mattsson på att vara
                    en drivkraft för positiv förändring och innovation inom sitt
                    område, i linje med de globala hållbarhetsmålen.
                  </div>
                  <div className="div-8">Hållbarhet</div>
                </div>
              </div>
              <div className="column-2">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4e7df4a8709a65a422247cf4f991eba7eee4a38f969b4c671076ff1a06c68f31?apiKey=9739e863fc0441d3bd6e2249eccb2e49&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e7df4a8709a65a422247cf4f991eba7eee4a38f969b4c671076ff1a06c68f31?apiKey=9739e863fc0441d3bd6e2249eccb2e49&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e7df4a8709a65a422247cf4f991eba7eee4a38f969b4c671076ff1a06c68f31?apiKey=9739e863fc0441d3bd6e2249eccb2e49&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e7df4a8709a65a422247cf4f991eba7eee4a38f969b4c671076ff1a06c68f31?apiKey=9739e863fc0441d3bd6e2249eccb2e49&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e7df4a8709a65a422247cf4f991eba7eee4a38f969b4c671076ff1a06c68f31?apiKey=9739e863fc0441d3bd6e2249eccb2e49&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e7df4a8709a65a422247cf4f991eba7eee4a38f969b4c671076ff1a06c68f31?apiKey=9739e863fc0441d3bd6e2249eccb2e49&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e7df4a8709a65a422247cf4f991eba7eee4a38f969b4c671076ff1a06c68f31?apiKey=9739e863fc0441d3bd6e2249eccb2e49&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e7df4a8709a65a422247cf4f991eba7eee4a38f969b4c671076ff1a06c68f31?apiKey=9739e863fc0441d3bd6e2249eccb2e49&"
                  className="img"
                />
              </div>
            </div>
          </div>
          <style jsx>{`
            .div {
              justify-content: flex-end;
              overflow: hidden;
              padding: 44px 69px;
              height: "100%";
            }
            @media (max-width: 991px) {
              .div {
                padding: 0 20px;
              }
            }
            .div-2 {
              gap: 20px;
              display: flex;
            }
            @media (max-width: 991px) {
              .div-2 {
                flex-direction: column;
                align-items: stretch;
                gap: 0px;
              }
            }
            .column {
              display: flex;
              flex-direction: column;
              line-height: normal;
              width: 50%;
              margin-left: 0px;
            }
            @media (max-width: 991px) {
              .column {
                width: 100%;
              }
            }
            .div-3 {
              display: flex;
              margin-top: 61px;
              flex-grow: 1;
              flex-direction: column;
              color: #fff;
              font-weight: 700;
            }
            @media (max-width: 991px) {
              .div-3 {
                max-width: 100%;
                margin-top: 40px;
              }
            }
            .div-4 {
              font: 600 20px/120% Inter, -apple-system, Roboto, Helvetica,
                sans-serif;
            }
            @media (max-width: 991px) {
              .div-4 {
                max-width: 100%;
              }
            }
            // .div-5 {
            //   margin-top: 6px;
            //   font: 36px/120% Inter, sans-serif;
            // }
            .div-5 {
              margin-top: 6px;
              font: 26px/120% Inter, sans-serif;
            }
            @media (max-width: 991px) {
              .div-5 {
                max-width: 100%;
              }
            }
            .div-6 {
              margin-top: 22px;
              font: 400 20px/38px Roboto, -apple-system, Roboto, Helvetica,
                sans-serif;
            }
            @media (max-width: 991px) {
              .div-6 {
                max-width: 100%;
              }
            }
            .div-7 {
              margin-top: 36px;
              font: 400 16px/30px Inter, -apple-system, Roboto, Helvetica,
                sans-serif;
            }
            @media (max-width: 991px) {
              .div-7 {
                max-width: 100%;
                margin-top: 40px;
              }
            }
            .div-8 {
              justify-content: center;
              align-items: center;
              border: 2px solid #fff;
              align-self: center;
              margin-top: 58px;
              width: 242px;
              max-width: 100%;
              white-space: nowrap;
              padding: 22px 60px;
              font: 20px/160% Montserrat, -apple-system, Roboto, Helvetica,
                sans-serif;
            }
            @media (max-width: 991px) {
              .div-8 {
                margin-top: 40px;
                white-space: initial;
                padding: 0 20px;
              }
            }
            .column-2 {
              display: flex;
              flex-direction: column;
              line-height: normal;
              width: 50%;
              margin-left: 20px;
            }
            @media (max-width: 991px) {
              .column-2 {
                width: 100%;
              }
            }
            .img {
              object-fit: auto;
              object-position: center;
              width: 100%;
              align-self: stretch;
              margin: auto 0;
            }
            @media (max-width: 991px) {
              .img {
                max-width: 100%;
                margin-top: 40px;
              }
            }
          `}</style>
        </>
      ) : (
        <>
          <div className="div section9 mt-5">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6d82809e4fc7b7b527baac1ca86e6de7ff2a78b7206c23729340d106f561c945?apiKey=9739e863fc0441d3bd6e2249eccb2e49&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d82809e4fc7b7b527baac1ca86e6de7ff2a78b7206c23729340d106f561c945?apiKey=9739e863fc0441d3bd6e2249eccb2e49&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d82809e4fc7b7b527baac1ca86e6de7ff2a78b7206c23729340d106f561c945?apiKey=9739e863fc0441d3bd6e2249eccb2e49&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d82809e4fc7b7b527baac1ca86e6de7ff2a78b7206c23729340d106f561c945?apiKey=9739e863fc0441d3bd6e2249eccb2e49&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d82809e4fc7b7b527baac1ca86e6de7ff2a78b7206c23729340d106f561c945?apiKey=9739e863fc0441d3bd6e2249eccb2e49&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d82809e4fc7b7b527baac1ca86e6de7ff2a78b7206c23729340d106f561c945?apiKey=9739e863fc0441d3bd6e2249eccb2e49&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d82809e4fc7b7b527baac1ca86e6de7ff2a78b7206c23729340d106f561c945?apiKey=9739e863fc0441d3bd6e2249eccb2e49&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d82809e4fc7b7b527baac1ca86e6de7ff2a78b7206c23729340d106f561c945?apiKey=9739e863fc0441d3bd6e2249eccb2e49&"
              className="img"
            />
            <div className="div-2">
              <div className="div-3">
                <div className="column">
                  <div className="div-4" />
                </div>
                <div className="column-2" />
              </div>
            </div>
          </div>
          <style jsx>{`
            .div {
              disply: flex;
              flex-direction: column;
              overflow: hidden;
              position: relative;
              display: flex;
              min-height: 431px;
              padding: 50px 74px;
            }
            @media (max-width: 991px) {
              .div {
                padding: 0 20px;
              }
            }
            .img {
              position: absolute;
              inset: 0;
              height: 100%;
              width: 100%;
              // object-fit: cover;
              object-position: center;
            }
            .div-2 {
              position: relative;
              margin-top: 31px;
            }
            @media (max-width: 991px) {
              .div-2 {
                max-width: 100%;
              }
            }
            .div-3 {
              gap: 20px;
              display: flex;
            }
            @media (max-width: 991px) {
              .div-3 {
                flex-direction: column;
                align-items: stretch;
                gap: 0px;
              }
            }
            .column {
              display: flex;
              flex-direction: column;
              line-height: normal;
              width: 50%;
              margin-left: 0px;
            }
            @media (max-width: 991px) {
              .column {
                width: 100%;
              }
            }
            .div-4 {
              position: relative;
              display: flex;
              flex-grow: 1;
              flex-direction: column;
              color: #fff;
            }
            @media (max-width: 991px) {
              .div-4 {
                margin-top: 26px;
              }
            }
            .column-2 {
              display: flex;
              flex-direction: column;
              line-height: normal;
              width: 50%;
              margin-left: 20px;
            }
            @media (max-width: 991px) {
              .column-2 {
                width: 100%;
              }
            }
          `}</style>
        </>
      )}
    </div>
  );
}

export default Section9;
