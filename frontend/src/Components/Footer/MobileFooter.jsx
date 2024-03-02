import React from "react";

function MobileFooter() {
  return (
    <>
      <div className="div">
        <div className="div-2">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e3ada46a79712468642357e93a2aabbd2c57c64b019424cd329192f48253bb5f?apiKey=9739e863fc0441d3bd6e2249eccb2e49&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3ada46a79712468642357e93a2aabbd2c57c64b019424cd329192f48253bb5f?apiKey=9739e863fc0441d3bd6e2249eccb2e49&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3ada46a79712468642357e93a2aabbd2c57c64b019424cd329192f48253bb5f?apiKey=9739e863fc0441d3bd6e2249eccb2e49&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3ada46a79712468642357e93a2aabbd2c57c64b019424cd329192f48253bb5f?apiKey=9739e863fc0441d3bd6e2249eccb2e49&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3ada46a79712468642357e93a2aabbd2c57c64b019424cd329192f48253bb5f?apiKey=9739e863fc0441d3bd6e2249eccb2e49&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3ada46a79712468642357e93a2aabbd2c57c64b019424cd329192f48253bb5f?apiKey=9739e863fc0441d3bd6e2249eccb2e49&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3ada46a79712468642357e93a2aabbd2c57c64b019424cd329192f48253bb5f?apiKey=9739e863fc0441d3bd6e2249eccb2e49&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3ada46a79712468642357e93a2aabbd2c57c64b019424cd329192f48253bb5f?apiKey=9739e863fc0441d3bd6e2249eccb2e49&"
            className="img"
          />
          <div className="div-3">Kontakt</div>
          <div className="div-4">Egestam Mattsson El & Data AB</div>
          <div className="div-5">Ridspögatan 15a</div>
          <div className="div-6">213 77 Malmö</div>
          <div className="div-7">
            <div className="div-8">Tel: </div>
            <div className="div-9">040-6170166</div>
          </div>
          <div className="div-10">
            <div className="div-11">E-post: </div>
            <div className="div-12">info@emeldata.se</div>
          </div>
        </div>
        <div className="div-13">
          <div className="div-14">Meny</div>
          <div className="div-15">Din integritet</div>
        </div>
        <div className="div-16">
          <div className="div-17">
            <div className="div-18">Vårt erbjudande</div>
            <div className="div-19">Hållbarhet</div>
            <div className="div-20">Jobba hos oss</div>
            <div className="div-21">Om oss</div>
            <div className="div-22">Kontakta oss</div>
          </div>
          <div className="div-23">
            <div className="div-24">Integritetspolicy</div>
            <div className="div-25">Cookiepolicy</div>
            <div className="div-26">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a23081013ba92e9ed5cc30147ef44eef1b0720fa004942867ae7fdc947be61f?apiKey=9739e863fc0441d3bd6e2249eccb2e49&"
                className="img-2"
              />
              <div className="div-27">Facebook</div>
            </div>
            {/* <div className="div-28">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6c24fcb2-18bd-4134-97c8-bbc51df5575e?apiKey=9739e863fc0441d3bd6e2249eccb2e49&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c24fcb2-18bd-4134-97c8-bbc51df5575e?apiKey=9739e863fc0441d3bd6e2249eccb2e49&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c24fcb2-18bd-4134-97c8-bbc51df5575e?apiKey=9739e863fc0441d3bd6e2249eccb2e49&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c24fcb2-18bd-4134-97c8-bbc51df5575e?apiKey=9739e863fc0441d3bd6e2249eccb2e49&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c24fcb2-18bd-4134-97c8-bbc51df5575e?apiKey=9739e863fc0441d3bd6e2249eccb2e49&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c24fcb2-18bd-4134-97c8-bbc51df5575e?apiKey=9739e863fc0441d3bd6e2249eccb2e49&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c24fcb2-18bd-4134-97c8-bbc51df5575e?apiKey=9739e863fc0441d3bd6e2249eccb2e49&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6c24fcb2-18bd-4134-97c8-bbc51df5575e?apiKey=9739e863fc0441d3bd6e2249eccb2e49&"
                className="img-3"
              />
              <div className="div-29">Instagram</div>
            </div> */}
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          border: 1px solid var(--egestam-mattsson, #89bf50);
          background-color: var(--egestam-mattsson, #89bf50);
          display: flex;
          max-width: 390px;
          flex-direction: column;
          font-size: 16px;
          color: #fff;
          font-weight: 400;
          line-height: 150%;
          padding: 13px 0 50px;
          top: 0px;
          left: -60px;
          position: relative;
        }
        .div-2 {
          display: flex;
          margin-left: 17px;
          width: 247px;
          max-width: 100%;
          flex-direction: column;
          align-items: start;
          line-height: 237.5%;
        }
        .img {
          aspect-ratio: 1.59;
          object-fit: auto;
          object-position: center;
          width: 164px;
          max-width: 100%;
        }
        .div-3 {
          margin: 25px 0 0 11px;
          font: 600 32px/120% Montserrat, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-4 {
          font-family: Inter, sans-serif;
          margin: 22px 0 0 11px;
        }
        .div-5 {
          font-family: Inter, sans-serif;
          margin: 9px 0 0 11px;
        }
        .div-6 {
          font-family: Inter, sans-serif;
          margin: 9px 0 0 11px;
        }
        .div-7 {
          display: flex;
          gap: 12px;
          margin: 20px 0 0 11px;
        }
        .div-8 {
          font-family: Montserrat, sans-serif;
        }
        .div-9 {
          font-family: Inter, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
        }
        .div-10 {
          display: flex;
          gap: 14px;
          margin: 12px 0 0 11px;
        }
        .div-11 {
          font-family: Montserrat, sans-serif;
        }
        .div-12 {
          font-family: Inter, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
        }
        .div-13 {
          border-top: 2px solid rgba(255, 255, 255, 0.1);
          display: flex;
          margin-top: 18px;
          width: 100%;
          justify-content: space-between;
          gap: 20px;
          font-size: 18px;
          font-weight: 600;
          padding: 34px 31px 2px;
        }
        .div-14 {
          font-family: Inter, sans-serif;
          left: -11px;
          position: relative;
        }
        .div-15 {
          font-family: Inter, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
          left: 104px;
          position: relative;
        }
        .div-16 {
          align-self: center;
          display: flex;
          margin-top: 14px;
          width: 100%;
          max-width: 308px;
          justify-content: space-between;
          gap: 20px;
        }
        .div-17 {
          display: flex;
          flex-direction: column;
          padding: 0 20px;
        }
        .div-18 {
          font-family: Inter, sans-serif;
          white-space: nowrap;
        }
        .div-19 {
          font-family: Inter, sans-serif;
          margin-top: 20px;
        }
        .div-20 {
          font-family: Inter, sans-serif;
          margin-top: 25px;
          white-space: nowrap;
        }
        .div-21 {
          font-family: Inter, sans-serif;
          margin-top: 25px;
        }
        .div-22 {
          font-family: Inter, sans-serif;
          margin-top: 26px;
          white-space: nowrap;
        }
        .div-23 {
          display: flex;
          flex-direction: column;
          white-space: nowrap;
          margin: auto 0;
          padding: 0 20px;
        }
        .div-24 {
          font-family: Inter, sans-serif;
        }
        .div-25 {
          font-family: Inter, sans-serif;
          margin-top: 22px;
        }
        .div-26 {
          display: flex;
          margin-top: 21px;
          justify-content: space-between;
          gap: 8px;
        }
        .img-2 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 32px;
        }
        .div-27 {
          font-family: Inter, sans-serif;
          flex-grow: 1;
          margin: auto 0;
        }
        .div-28 {
          display: flex;
          margin-top: 16px;
          justify-content: space-between;
          gap: 8px;
        }
        .img-3 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 32px;
          fill: #fff;
        }
        .div-29 {
          font-family: Inter, sans-serif;
          align-self: start;
          margin-top: 15px;
          flex-grow: 1;
        }
      `}</style>
    </>
  );
}

export default MobileFooter;
