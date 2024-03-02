import React, { useEffect, useState } from "react";

function Section1() {
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
    <div className="section1">
      <div className="container">
        <div className="section-header">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="73"
            height="73"
            viewBox="0 0 73 73"
            fill="none"
            className="arrow"
          >
            <path
              d="M36.5003 66.9168C53.2989 66.9168 66.9169 53.2988 66.9169 36.5002C66.9169 19.7015 53.2989 6.0835 36.5003 6.0835C19.7016 6.0835 6.08362 19.7015 6.08362 36.5002C6.08362 53.2988 19.7016 66.9168 36.5003 66.9168Z"
              stroke="#00354E"
              stroke-width="1.28583"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M36.4999 48.6663L48.6666 36.4997M48.6666 36.4997L36.4999 24.333M48.6666 36.4997H24.3333"
              stroke="#00354E"
              stroke-width="1.28583"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h1>Välkommen till EM El & Data AB </h1>
        </div>
        <p>
          Egestam & Mattsson grundades 2012, vi är experter inom el- och
          datanätverksinstallationer. Ett entreprenörsdrivet företag som drivs
          med ett team engagerade medarbetare. Vi kombinerar gedigen teknisk
          kunskap med ett starkt engagemang för hållbarhet, fokuserade på att
          leverera miljövänliga och innovativa lösningar för fastigheter och
          infrastruktur.
        </p>
        <div className="section1-btn-div d-md-none">
          <button className="section-1-btn">Om oss</button>
        </div>
      </div>
    </div>
  );
}

export default Section1;
