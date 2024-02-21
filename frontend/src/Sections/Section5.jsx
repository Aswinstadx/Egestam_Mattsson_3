import React, { useEffect } from "react";

function Section5() {
  useEffect(() => {
    const handleResize = () => {
      console.log("Screen width:", window.innerWidth);
    };

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
        <div className="row">
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
                  avkastning genom en stabil ekonomisk tillväxt. Vår verksamhet
                  präglas av en noggrant kontrollerad riskhantering med
                  förankring i god affärsetik. Ett centralt fokus i vår
                  affärsstrategi är att aktivt minska vår miljöpåverkan, vilket
                  vi ser som en avgörande aspekt för att främja en hållbar
                  framtid.
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
        </div>
      </div>
    </div>
  );
}

export default Section5;
