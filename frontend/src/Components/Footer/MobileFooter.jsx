import React from "react";

function MobileFooter() {
  return (
    <div className="footer">
      <div className="container mt-4">
        <img src={process.env.PUBLIC_URL + "/images/logo3.png"} />
        <div className="footer-content mt-3">
          <h2>Kontakt</h2>
          <h6>Egestam Mattsson El & Data AB</h6>
        </div>
      </div>
    </div>
  );
}

export default MobileFooter;
