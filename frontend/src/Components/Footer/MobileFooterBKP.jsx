import React from "react";
import { BRAND_ICON } from "../../Constants/urls";

function MobileFooter() {
  return (
    <div className="mobile-footer">
      <img src={BRAND_ICON} className="brand-icon" />
      <div>
        <h2>Kontakt</h2>
        <ul>
          <li>Egestam Mattsson El & Data AB</li>
          <li>Ridspögatan 15a</li>
          <li>213 77 Malmö</li>
          <li>Tel : 040-6170166</li>
          <li>E-post : info@emeldata.se</li>
        </ul>
      </div>
      <div
        className="footer-bottom"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="col-md-6">
          <div>
            <h4>Many</h4>
            <ul>
              <li>Vårt erbjudande</li>
              <li>Hållbarhet</li>
              <li>Jobba hos oss</li>
              <li>Om oss</li>
              <li>Kontakta oss</li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <div>
            <h4>Many</h4>
            <ul>
              <li>Vårt erbjudande</li>
              <li>Hållbarhet</li>
              <li>Jobba hos oss</li>
              <li>Om oss</li>
              <li>Kontakta oss</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileFooter;
