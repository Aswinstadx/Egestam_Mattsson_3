import React from "react";

function MobileOnly() {
  return (
    <div className="container-fluid mt-5 mobile_screen_only">
      <img className="w-100" src={process.env.PUBLIC_URL + "/images/adv.png"} />
      <div>
        <p>
          Egestam och Mattsson har antagit en policy som aktivt stödjer de
          globala målen för hållbar utveckling. Denna policy innefattar
          åtaganden att minska miljöpåverkan från verksamheten, främja
          energieffektivitet i alla projekt, och bidra till att bygga hållbara
          samhällen. Företaget strävar efter att integrera hållbara metoder i
          alla aspekter av vår affärsmodell, från design och installation till
          drift och underhåll. Genom att arbeta nära med kunder och
          samarbetspartners, siktar Egestam och Mattsson på att vara en
          drivkraft för positiv förändring och innovation inom sitt område, i
          linje med de globala hållbarhetsmålen.
        </p>
        <div className="text-center h-btn">
          <button>Hållbarhet</button>
        </div>
        <div className="news-section_mobile">
          <img src={process.env.PUBLIC_URL + "/images/section7-im2.png"} />
          <div className="news-section_mobile-title mt-2">
            Hör av dig till oss!
          </div>
          <div className="new-section_mobile_p mt-2">
            Behöver du hjälp med något ? Kontakta oss idag!
          </div>
          <div
            style={{
              top: "226px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <button className="btn-1">
              <span style={{ top: "0px", position: "relative" }}>
                {" "}
                Hitta till vårt kontor{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M10.5377 4.21001L10.6155 4.27334L13.9488 7.60668L13.99 7.65334L14.0366 7.72223L14.07 7.7889L14.0922 7.85779L14.1055 7.92001L14.1111 8.00001L14.1077 8.0589L14.0922 8.14223L14.07 8.21223L14.0122 8.31557L13.9611 8.3789L10.6155 11.7267C10.5175 11.8251 10.3862 11.8833 10.2475 11.8897C10.1087 11.8961 9.97263 11.8503 9.86597 11.7614C9.75931 11.6724 9.68984 11.5467 9.67124 11.4091C9.65264 11.2715 9.68628 11.1319 9.76551 11.0178L9.82884 10.94L12.2144 8.55557H2.4444C2.30557 8.55582 2.17167 8.50409 2.06908 8.41056C1.96649 8.31702 1.90263 8.18847 1.89009 8.05021C1.87755 7.91195 1.91722 7.774 2.00131 7.66353C2.08539 7.55306 2.20779 7.47808 2.3444 7.45334L2.4444 7.44445H12.2144L9.82884 5.06001C9.73698 4.96795 9.68033 4.84658 9.66876 4.71704C9.65718 4.5875 9.69142 4.45801 9.76551 4.35112L9.82884 4.27334C9.90915 4.19332 10.012 4.13978 10.1236 4.11992C10.2353 4.10006 10.3503 4.11482 10.4533 4.16223L10.5377 4.21001Z"
                    fill="white"
                  />
                </svg>
              </span>
            </button>
            <button className="btn-2 mt-3">
              <span style={{ top: "0px", position: "relative" }}>
                Ring oss direkt
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M10.5377 4.21001L10.6155 4.27334L13.9488 7.60668L13.99 7.65334L14.0366 7.72223L14.07 7.7889L14.0922 7.85779L14.1055 7.92001L14.1111 8.00001L14.1077 8.0589L14.0922 8.14223L14.07 8.21223L14.0122 8.31557L13.9611 8.3789L10.6155 11.7267C10.5175 11.8251 10.3862 11.8833 10.2475 11.8897C10.1087 11.8961 9.97263 11.8503 9.86597 11.7614C9.75931 11.6724 9.68984 11.5467 9.67124 11.4091C9.65264 11.2715 9.68628 11.1319 9.76551 11.0178L9.82884 10.94L12.2144 8.55557H2.4444C2.30557 8.55582 2.17167 8.50409 2.06908 8.41056C1.96649 8.31702 1.90263 8.18847 1.89009 8.05021C1.87755 7.91195 1.91722 7.774 2.00131 7.66353C2.08539 7.55306 2.20779 7.47808 2.3444 7.45334L2.4444 7.44445H12.2144L9.82884 5.06001C9.73698 4.96795 9.68033 4.84658 9.66876 4.71704C9.65718 4.5875 9.69142 4.45801 9.76551 4.35112L9.82884 4.27334C9.90915 4.19332 10.012 4.13978 10.1236 4.11992C10.2353 4.10006 10.3503 4.11482 10.4533 4.16223L10.5377 4.21001Z"
                    fill="white"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileOnly;
