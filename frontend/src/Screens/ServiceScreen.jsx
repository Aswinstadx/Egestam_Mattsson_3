import React from "react";
import ServiceBanner from "../Components/Banner/ServiceBanner";
import Accordion from "../Components/Accordion/Accordion";
import Accordion1 from "../Components/Accordion/Accordion1";
function ServiceScreen() {
  return (
    <div>
      <ServiceBanner />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <Accordion />
          </div>
          <div className="col-md-6">
            <Accordion1 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceScreen;
