import React, { useEffect, useState } from "react";

function Banner() {
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
      <>
        <div className="cms-banner-container">
          {isMobile ? (
            <>
              <img
                src={process.env.PUBLIC_URL + "/images/cms_mob.png"}
                className="w-100"
              />
            </>
          ) : (
            <img
              src={process.env.PUBLIC_URL + "/images/cms_banner.png"}
              className="w-100"
            />
          )}
        </div>
      </>
    </div>
  );
}

export default Banner;
