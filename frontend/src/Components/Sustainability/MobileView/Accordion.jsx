import React, { useState } from "react";

const Accordion = ({ year, title, content, color }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sus-page-mobile-view">
      <div
        className="accordion"
        style={{ backgroundColor: color, width: "100%" }}
      >
        <div
          className="accordion-header"
          onClick={toggleAccordion}
          style={{ backgroundColor: color, height: "121px" }}
        >
          <div className="accordion-title-1 m-4">
            <h4>{year}</h4>
            <h4 style={{ top: "-10px", position: "relative" }}>{title}</h4>
          </div>
          <div className="accordion-toggle more-text-">
            {/* {isOpen ? "Minimera" : "Läs mer"} */}
            {isOpen ? "Minimera" : "Läs mer"}
          </div>
        </div>
        {isOpen && (
          <div
            className="accordion-content"
            style={{
              backgroundColor: color,
              width: color !== "white" && "111.3%",
              margin: color !== "white" && "-22px",
            }}
          >
            {color == "white" ? (
              <>{content}</>
            ) : (
              <div className="continer m-3">{content}</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
