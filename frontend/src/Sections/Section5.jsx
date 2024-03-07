import React, { useEffect, useState } from "react";

function Section5() {
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
    <div className="section5">
      <div className="container">
        <div className="row ">
          {isIpad || (window.innerWidth >= 1025 && window.innerWidth < 1500) ? (
            <>
              {console.log("##################")}
              <div
                className="text-center d-flex justify-content-center align-items-center position-relative"
                style={{ flexDirection: "column" }}
              >
                <img
                  src={process.env.PUBLIC_URL + "/images/macbook_im.png"}
                  className="card2-im text-center justify-content-center"
                />
                {/* <div className="position-absolute top-50 start-50 translate-middle image-content-2 text-left"> */}
                <div className="position-absolute top-50 start-50 translate-middle image-content-2 text-left">
                  <h2 className="text-left">Jobba hos oss</h2>
                  <p className="text-left mt-4">
                    Är du intresserad av att vara med och forma framtidens
                    infrastruktur och fastighetslösningar?
                    <br /> Bli en del av vårt team & hjälp oss att bygga en
                    hållbar framtid
                  </p>
                  <button>
                    Läs mer om lediga tjänster
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <path
                        d="M10.8178 4.21001L10.8955 4.27334L14.2289 7.60668L14.27 7.65334L14.3166 7.72223L14.35 7.7889L14.3722 7.85779L14.3855 7.92001L14.3911 8.00001L14.3878 8.0589L14.3722 8.14223L14.35 8.21223L14.2922 8.31557L14.2411 8.3789L10.8955 11.7267C10.7975 11.8251 10.6662 11.8833 10.5275 11.8897C10.3888 11.8961 10.2527 11.8503 10.146 11.7614C10.0393 11.6724 9.96986 11.5467 9.95127 11.4091C9.93267 11.2715 9.96631 11.1319 10.0455 11.0178L10.1089 10.94L12.4944 8.55557H2.72443C2.5856 8.55582 2.4517 8.50409 2.34911 8.41056C2.24652 8.31702 2.18266 8.18847 2.17012 8.05021C2.15758 7.91195 2.19725 7.774 2.28134 7.66353C2.36542 7.55306 2.48782 7.47808 2.62443 7.45334L2.72443 7.44445H12.4944L10.1089 5.06001C10.017 4.96795 9.96036 4.84658 9.94878 4.71704C9.93721 4.5875 9.97145 4.45801 10.0455 4.35112L10.1089 4.27334C10.1892 4.19332 10.2921 4.13978 10.4037 4.11992C10.5153 4.10006 10.6303 4.11482 10.7333 4.16223L10.8178 4.21001Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div
                className="text-center d-flex justify-content-center align-items-center"
                style={{ flexDirection: "column" }}
              >
                {/* <img
                  src={process.env.PUBLIC_URL + "/images/macbook_im.png"}
                  className="card2-im text-center justify-content-center"
                />
                <div>
                  <h2>Jobba hos oss</h2>
                  <p>
                    Är du intresserad av att vara med och forma framtidens
                    infrastruktur och fastighetslösningar? Bli en del av vårt
                    team & hjälp oss att bygga en hållbar framtid
                  </p>
                  <button>
                    Läs mer om lediga tjänster
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <path
                        d="M10.8178 4.21001L10.8955 4.27334L14.2289 7.60668L14.27 7.65334L14.3166 7.72223L14.35 7.7889L14.3722 7.85779L14.3855 7.92001L14.3911 8.00001L14.3878 8.0589L14.3722 8.14223L14.35 8.21223L14.2922 8.31557L14.2411 8.3789L10.8955 11.7267C10.7975 11.8251 10.6662 11.8833 10.5275 11.8897C10.3888 11.8961 10.2527 11.8503 10.146 11.7614C10.0393 11.6724 9.96986 11.5467 9.95127 11.4091C9.93267 11.2715 9.96631 11.1319 10.0455 11.0178L10.1089 10.94L12.4944 8.55557H2.72443C2.5856 8.55582 2.4517 8.50409 2.34911 8.41056C2.24652 8.31702 2.18266 8.18847 2.17012 8.05021C2.15758 7.91195 2.19725 7.774 2.28134 7.66353C2.36542 7.55306 2.48782 7.47808 2.62443 7.45334L2.72443 7.44445H12.4944L10.1089 5.06001C10.017 4.96795 9.96036 4.84658 9.94878 4.71704C9.93721 4.5875 9.97145 4.45801 10.0455 4.35112L10.1089 4.27334C10.1892 4.19332 10.2921 4.13978 10.4037 4.11992C10.5153 4.10006 10.6303 4.11482 10.7333 4.16223L10.8178 4.21001Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div> */}
                {/* <div className="image-content_">
                  <h2>Jobba hos oss</h2>
                  <p>
                    Är du intresserad av att vara med och forma framtidens
                    infrastruktur och fastighetslösningar? Bli en del av vårt
                    team & hjälp oss att bygga en hållbar framtid
                  </p>
                  <button>
                    Läs mer om lediga tjänster
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <path
                        d="M10.8178 4.21001L10.8955 4.27334L14.2289 7.60668L14.27 7.65334L14.3166 7.72223L14.35 7.7889L14.3722 7.85779L14.3855 7.92001L14.3911 8.00001L14.3878 8.0589L14.3722 8.14223L14.35 8.21223L14.2922 8.31557L14.2411 8.3789L10.8955 11.7267C10.7975 11.8251 10.6662 11.8833 10.5275 11.8897C10.3888 11.8961 10.2527 11.8503 10.146 11.7614C10.0393 11.6724 9.96986 11.5467 9.95127 11.4091C9.93267 11.2715 9.96631 11.1319 10.0455 11.0178L10.1089 10.94L12.4944 8.55557H2.72443C2.5856 8.55582 2.4517 8.50409 2.34911 8.41056C2.24652 8.31702 2.18266 8.18847 2.17012 8.05021C2.15758 7.91195 2.19725 7.774 2.28134 7.66353C2.36542 7.55306 2.48782 7.47808 2.62443 7.45334L2.72443 7.44445H12.4944L10.1089 5.06001C10.017 4.96795 9.96036 4.84658 9.94878 4.71704C9.93721 4.5875 9.97145 4.45801 10.0455 4.35112L10.1089 4.27334C10.1892 4.19332 10.2921 4.13978 10.4037 4.11992C10.5153 4.10006 10.6303 4.11482 10.7333 4.16223L10.8178 4.21001Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div> */}
              </div>
              {console.log("1111111111111")}
              <div className="col-md-6 col-sm-12 col-12 ipad-im">
                <div className="image-container text-center ">
                  {/* <div className="overlay4"></div> */}
                  {/* <div className="dark-overlay"></div> */}
                  {/* <img
                    src={process.env.PUBLIC_URL + "/images/sectn_5.jpeg"}
                    className="card2-im text-center"
                  /> */}
                  {/* <img
                    src={process.env.PUBLIC_URL + "/images/macbook_im.png"}
                    className="card2-im text-center justify-content-center"
                  />
                  <div className="image-content_">
                    <h2>Jobba hos oss</h2>
                    <p>
                      Är du intresserad av att vara med och forma framtidens
                      infrastruktur och fastighetslösningar? Bli en del av vårt
                      team & hjälp oss att bygga en hållbar framtid
                    </p>
                    <button>
                      Läs mer om lediga tjänster
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                      >
                        <path
                          d="M10.8178 4.21001L10.8955 4.27334L14.2289 7.60668L14.27 7.65334L14.3166 7.72223L14.35 7.7889L14.3722 7.85779L14.3855 7.92001L14.3911 8.00001L14.3878 8.0589L14.3722 8.14223L14.35 8.21223L14.2922 8.31557L14.2411 8.3789L10.8955 11.7267C10.7975 11.8251 10.6662 11.8833 10.5275 11.8897C10.3888 11.8961 10.2527 11.8503 10.146 11.7614C10.0393 11.6724 9.96986 11.5467 9.95127 11.4091C9.93267 11.2715 9.96631 11.1319 10.0455 11.0178L10.1089 10.94L12.4944 8.55557H2.72443C2.5856 8.55582 2.4517 8.50409 2.34911 8.41056C2.24652 8.31702 2.18266 8.18847 2.17012 8.05021C2.15758 7.91195 2.19725 7.774 2.28134 7.66353C2.36542 7.55306 2.48782 7.47808 2.62443 7.45334L2.72443 7.44445H12.4944L10.1089 5.06001C10.017 4.96795 9.96036 4.84658 9.94878 4.71704C9.93721 4.5875 9.97145 4.45801 10.0455 4.35112L10.1089 4.27334C10.1892 4.19332 10.2921 4.13978 10.4037 4.11992C10.5153 4.10006 10.6303 4.11482 10.7333 4.16223L10.8178 4.21001Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div> */}
                </div>
              </div>
              <div className="row ipad-cards">
                <div className="col-md-6 col-6">
                  <div className="ipad-card card1">
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
                <div className="col-md-6 col-6">
                  <div
                    className="ipad-card ipad-air"
                    style={{ marginLeft: "50px" }}
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/images/section7-im2.png"}
                      className="ipad-im"
                    />
                    <div className="ipad-card-content">
                      <h2>Hör av dig till oss </h2>
                      <h6>Behöver du hjälp med något ? Kontakta oss idag!</h6>
                      {/* <p>Behöver du hjälp med något ? Kontakta oss idag!</p> */}
                      <div className="ipad-card-content-btns">
                        <button className="btn_01">
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
                        <button className="btn_02">
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
              {console.log("===================")}
              <div className="col-md-6 col-sm-12 col-12">
                <div>
                  <img src={process.env.PUBLIC_URL + "/images/section5.png"} />
                  <div className="section5-content">
                    {/* <h2 style={{color:'#003A3A',fontFamily:'Inter',fontSize:'20px',fontWeight:700}}>VÅRT MOTTO </h2> */}
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

              <div className="col-md-6 col-sm-12 col-12 position-relative zero-padding_">
                <div style={{ padding: 0 }}>
                  {isMobile ? (
                    <>
                      <img
                        src={process.env.PUBLIC_URL + "/images/sectn_5.jpeg"}
                        className="card2-im"
                        style={{
                          borderTopLeftRadius: !isMobile && "20px",
                          borderTopRightRadius: !isMobile && "20px",
                          maxWidth: isMobile ? "107%" : "100%",
                          height: !isMobile && "72%",
                        }}
                        alt="Background"
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: "64px",
                          left: 0,
                          width: "105%",
                          height: "89%",
                          backgroundColor: "rgba(0, 0, 0, 0.60)",
                        }}
                      />
                      <div className="card-image-content">
                        <h2>Jobba hos oss</h2>
                        <p
                          style={{
                            maxWidth: "100%", // Set maximum width to 100% of its container
                            width: isMobile ? "308px" : "100%", // Ensure the width adjusts to its container
                            maxHeight: "100%",
                            color: isMobile && "white",
                          }}
                          className="card-paragraph"
                        >
                          Är du intresserad av att vara med och forma framtidens
                          infrastruktur och fastighetslösningar? Bli en del av
                          vårt team & hjälp oss att bygga en hållbar framtid
                        </p>
                        <button>
                          Läs mer om lediga tjänster{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                          >
                            <path
                              d="M10.8178 4.31987L10.8956 4.38321L14.2289 7.71654L14.27 7.76321L14.3167 7.8321L14.35 7.89876L14.3722 7.96765L14.3856 8.02987L14.3911 8.10987L14.3878 8.16876L14.3722 8.2521L14.35 8.3221L14.2922 8.42543L14.2411 8.48876L10.8956 11.8365C10.7976 11.935 10.6663 11.9931 10.5275 11.9995C10.3888 12.006 10.2527 11.9602 10.146 11.8712C10.0394 11.7823 9.96988 11.6566 9.95128 11.519C9.93269 11.3813 9.96632 11.2417 10.0456 11.1277L10.1089 11.0499L12.4944 8.66543H2.72444C2.58561 8.66568 2.45172 8.61395 2.34913 8.52042C2.24653 8.42689 2.18268 8.29833 2.17014 8.16007C2.15759 8.02181 2.19727 7.88386 2.28135 7.77339C2.36544 7.66292 2.48783 7.58794 2.62444 7.56321L2.72444 7.55432H12.4944L10.1089 5.16987C10.017 5.07781 9.96037 4.95644 9.9488 4.8269C9.93723 4.69736 9.97147 4.56787 10.0456 4.46098L10.1089 4.38321C10.1892 4.30318 10.2921 4.24964 10.4037 4.22978C10.5153 4.20992 10.6303 4.22469 10.7333 4.2721L10.8178 4.31987Z"
                              fill="white"
                            />
                          </svg>
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <img
                        src={process.env.PUBLIC_URL + "/images/sectn_5.jpeg"}
                        className="card2-im"
                        style={{
                          borderTopLeftRadius: !isMobile && "7px",
                          borderTopRightRadius: !isMobile && "7px",
                          maxWidth: isMobile ? "107%" : "100%",
                          height: "577px",
                        }}
                        alt="Background"
                      />
                      {/* <div
                        style={{
                          borderTopLeftRadius: !isMobile && "7px",
                          borderTopRightRadius: !isMobile && "7px",
                          position: "absolute",
                          top: "9px",
                          left: "11px",
                          width: "96.6%",
                          height: "98%",
                          backgroundColor: "rgba(0, 0, 0, 0.60)",
                        }}
                      /> */}
                      <div className="card-image-content card-image-content_2_">
                        <div className="container">
                          <h2>Jobba hos oss</h2>
                          <p className="card-paragraph container-fluid" style={{width:'600px',maxWidth:'100%'}}>
                            Är du intresserad av att vara med och forma
                            framtidens infrastruktur och fastighetslösningar?
                            Bli en del av vårt team & hjälp oss att bygga en
                            hållbar framtid
                          </p>
                          <button>
                            Läs mer om lediga tjänster{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="17"
                              height="17"
                              viewBox="0 0 17 17"
                              fill="none"
                            >
                              <path
                                d="M10.8178 4.31987L10.8956 4.38321L14.2289 7.71654L14.27 7.76321L14.3167 7.8321L14.35 7.89876L14.3722 7.96765L14.3856 8.02987L14.3911 8.10987L14.3878 8.16876L14.3722 8.2521L14.35 8.3221L14.2922 8.42543L14.2411 8.48876L10.8956 11.8365C10.7976 11.935 10.6663 11.9931 10.5275 11.9995C10.3888 12.006 10.2527 11.9602 10.146 11.8712C10.0394 11.7823 9.96988 11.6566 9.95128 11.519C9.93269 11.3813 9.96632 11.2417 10.0456 11.1277L10.1089 11.0499L12.4944 8.66543H2.72444C2.58561 8.66568 2.45172 8.61395 2.34913 8.52042C2.24653 8.42689 2.18268 8.29833 2.17014 8.16007C2.15759 8.02181 2.19727 7.88386 2.28135 7.77339C2.36544 7.66292 2.48783 7.58794 2.62444 7.56321L2.72444 7.55432H12.4944L10.1089 5.16987C10.017 5.07781 9.96037 4.95644 9.9488 4.8269C9.93723 4.69736 9.97147 4.56787 10.0456 4.46098L10.1089 4.38321C10.1892 4.30318 10.2921 4.24964 10.4037 4.22978C10.5153 4.20992 10.6303 4.22469 10.7333 4.2721L10.8178 4.31987Z"
                                fill="white"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                {/* <div className="card-image-content">
                  <h2>Jobba hos oss</h2>
                  <p
                    style={{
                      maxWidth: "100%", // Set maximum width to 100% of its container
                      width: isMobile ? "308px" : "100%", // Ensure the width adjusts to its container
                      maxHeight: "100%",
                      color: isMobile && "white",
                    }}
                    className="card-paragraph"
                  >
                    Är du intresserad av att vara med och forma framtidens
                    infrastruktur och fastighetslösningar? Bli en del av vårt
                    team & hjälp oss att bygga en hållbar framtid
                  </p>
                  <button>
                    Läs mer om lediga tjänster{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                    >
                      <path
                        d="M10.8178 4.31987L10.8956 4.38321L14.2289 7.71654L14.27 7.76321L14.3167 7.8321L14.35 7.89876L14.3722 7.96765L14.3856 8.02987L14.3911 8.10987L14.3878 8.16876L14.3722 8.2521L14.35 8.3221L14.2922 8.42543L14.2411 8.48876L10.8956 11.8365C10.7976 11.935 10.6663 11.9931 10.5275 11.9995C10.3888 12.006 10.2527 11.9602 10.146 11.8712C10.0394 11.7823 9.96988 11.6566 9.95128 11.519C9.93269 11.3813 9.96632 11.2417 10.0456 11.1277L10.1089 11.0499L12.4944 8.66543H2.72444C2.58561 8.66568 2.45172 8.61395 2.34913 8.52042C2.24653 8.42689 2.18268 8.29833 2.17014 8.16007C2.15759 8.02181 2.19727 7.88386 2.28135 7.77339C2.36544 7.66292 2.48783 7.58794 2.62444 7.56321L2.72444 7.55432H12.4944L10.1089 5.16987C10.017 5.07781 9.96037 4.95644 9.9488 4.8269C9.93723 4.69736 9.97147 4.56787 10.0456 4.46098L10.1089 4.38321C10.1892 4.30318 10.2921 4.24964 10.4037 4.22978C10.5153 4.20992 10.6303 4.22469 10.7333 4.2721L10.8178 4.31987Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div> */}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Section5;
