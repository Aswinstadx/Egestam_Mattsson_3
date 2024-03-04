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
        {!isMobile && (
          <>
            <select
              className="mt-5 card-select"
              style={{ top: "22px", position: "relative" }}
            >
              <option>Kategori</option>
              <option>Kategori</option>
              <option>Kategori</option>
              <option>Kategori</option>
              <option>Kategori</option>
            </select>
          </>
        )}
        <div className="card-container mt-5">
          {[...Array(9)].map((_, index) => (
            <Card key={index} title={`Card ${index + 1}`} />
          ))}
        </div>

        <div className="" style={{ float: "right" }}>
          <select
            className="mt-5 card-select2"
            style={{
              top: !isMobile && "22px",
              position: "relative",
              float: "right",
            }}
          >
            <option>Visa fler</option>
            <option>Kategori</option>
            <option>Kategori</option>
            <option>Kategori</option>
            <option>Kategori</option>
          </select>
        </div>
      </div>
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

export default NewsScreen;
