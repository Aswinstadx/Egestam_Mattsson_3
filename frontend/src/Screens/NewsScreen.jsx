import React, { useEffect, useState } from "react";
import NewsBanner from "../Components/News/NewsBanner";
import Card from "../Components/Card/Card";
import Footer from "../Components/Footer/Footer";
import MobileFooter from "../Components/Footer/MobileFooter";

function NewsScreen() {
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
      <NewsBanner />
      <div className="container">
        <div className="card-container mt-5">
          {[...Array(9)].map((_, index) => (
            <Card key={index} title={`Card ${index + 1}`} />
          ))}
        </div>
      </div>
      <footer>
        {isMobile ? (
          <>
            <MobileFooter />
          </>
        ) : (
          <>
            <Footer />
          </>
        )}
      </footer>
    </div>
  );
}

export default NewsScreen;
