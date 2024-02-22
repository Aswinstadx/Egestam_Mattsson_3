import React, { useEffect, useState } from "react";

function Section5() {
  const [isIpad, setIsIpad] = useState(false);

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
    <div className="section5">
      <div className="container">
        <div className="row ">
          {isIpad ? (
            <>
              <div className="col-md-6 col-sm-12 col-12 ipad-im">
                <div className="image-container ">
                  <div className="overlay4"></div>
                  <img
                    src={process.env.PUBLIC_URL + "/images/sectn_5.jpeg"}
                    className="card2-im text-center"
                  />
                  <div className="image-content_">
                    <h2>Jobba hos oss</h2>
                    <p>
                      Är du intresserad av att vara med och forma framtidens
                      infrastruktur och fastighetslösningar? Bli en del av vårt
                      team & hjälp oss att bygga en hållbar framtid
                    </p>
                  </div>
                </div>
              </div>
              <div className="row ipad-cards">
                <div className="col-md-6">
                  <div className="ipad-card">
                    <img
                      src={process.env.PUBLIC_URL + "/images/section5.png"}
                    />
                    <div className="ipad-card-content">
                      <h2>VÅRT MOTTO </h2>
                      <h6>
                        Kontrollerad riskhantering med förankring i god
                        affärsetik
                      </h6>
                      <p>
                        Egestam och Mattsson strävar efter att generera stark
                        avkastning genom en stabil ekonomisk tillväxt. Vår
                        verksamhet präglas av en noggrant kontrollerad
                        riskhantering med förankring i god affärsetik. Ett
                        centralt fokus i vår affärsstrategi är att aktivt minska
                        vår miljöpåverkan, vilket vi ser som en avgörande aspekt
                        för att främja en hållbar framtid.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="ipad-card" style={{ marginLeft: "84px" }}>
                    <img
                      src={process.env.PUBLIC_URL + "/images/section7-im2.png"}
                    />
                    <div className="ipad-card-content">
                      <h2>Hör av dig till oss </h2>
                      <h6>Behöver du hjälp med något ? Kontakta oss idag!</h6>
                      {/* <p>Behöver du hjälp med något ? Kontakta oss idag!</p> */}
                      <div className="ipad-card-content-btns">
                        <button>
                          Hitta till vårt kontor{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M10.5379 4.21001L10.6156 4.27334L13.949 7.60668L13.9901 7.65334L14.0367 7.72223L14.0701 7.7889L14.0923 7.85779L14.1056 7.92001L14.1112 8.00001L14.1079 8.0589L14.0923 8.14223L14.0701 8.21223L14.0123 8.31557L13.9612 8.3789L10.6156 11.7267C10.5176 11.8251 10.3863 11.8833 10.2476 11.8897C10.1089 11.8961 9.97275 11.8503 9.86609 11.7614C9.75943 11.6724 9.68996 11.5467 9.67136 11.4091C9.65277 11.2715 9.6864 11.1319 9.76563 11.0178L9.82896 10.94L12.2145 8.55557H2.44452C2.30569 8.55582 2.1718 8.50409 2.0692 8.41056C1.96661 8.31702 1.90276 8.18847 1.89021 8.05021C1.87767 7.91195 1.91735 7.774 2.00143 7.66353C2.08551 7.55306 2.20791 7.47808 2.34452 7.45334L2.44452 7.44445H12.2145L9.82896 5.06001C9.7371 4.96795 9.68045 4.84658 9.66888 4.71704C9.6573 4.5875 9.69154 4.45801 9.76563 4.35112L9.82896 4.27334C9.90928 4.19332 10.0121 4.13978 10.1238 4.11992C10.2354 4.10006 10.3504 4.11482 10.4534 4.16223L10.5379 4.21001Z"
                              fill="white"
                            />
                          </svg>
                        </button>
                        <button>
                          Ring oss direkt{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M10.5379 4.21001L10.6156 4.27334L13.949 7.60668L13.9901 7.65334L14.0367 7.72223L14.0701 7.7889L14.0923 7.85779L14.1056 7.92001L14.1112 8.00001L14.1079 8.0589L14.0923 8.14223L14.0701 8.21223L14.0123 8.31557L13.9612 8.3789L10.6156 11.7267C10.5176 11.8251 10.3863 11.8833 10.2476 11.8897C10.1089 11.8961 9.97275 11.8503 9.86609 11.7614C9.75943 11.6724 9.68996 11.5467 9.67136 11.4091C9.65277 11.2715 9.6864 11.1319 9.76563 11.0178L9.82896 10.94L12.2145 8.55557H2.44452C2.30569 8.55582 2.1718 8.50409 2.0692 8.41056C1.96661 8.31702 1.90276 8.18847 1.89021 8.05021C1.87767 7.91195 1.91735 7.774 2.00143 7.66353C2.08551 7.55306 2.20791 7.47808 2.34452 7.45334L2.44452 7.44445H12.2145L9.82896 5.06001C9.7371 4.96795 9.68045 4.84658 9.66888 4.71704C9.6573 4.5875 9.69154 4.45801 9.76563 4.35112L9.82896 4.27334C9.90928 4.19332 10.0121 4.13978 10.1238 4.11992C10.2354 4.10006 10.3504 4.11482 10.4534 4.16223L10.5379 4.21001Z"
                              fill="white"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="col-md-6 col-sm-12 col-12">
                <div>
                  <img src={process.env.PUBLIC_URL + "/images/section5.png"} />
                  <div className="section5-content">
                    <h2>VÅRT MOTTO </h2>
                    <h6>
                      Kontrollerad riskhantering med förankring i god affärsetik
                    </h6>
                    <p>
                      Egestam och Mattsson strävar efter att generera stark
                      avkastning genom en stabil ekonomisk tillväxt. Vår
                      verksamhet präglas av en noggrant kontrollerad
                      riskhantering med förankring i god affärsetik. Ett
                      centralt fokus i vår affärsstrategi är att aktivt minska
                      vår miljöpåverkan, vilket vi ser som en avgörande aspekt
                      för att främja en hållbar framtid.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-12">
                <img
                  src={process.env.PUBLIC_URL + "/images/section5_2.png"}
                  className="card2-im"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Section5;
