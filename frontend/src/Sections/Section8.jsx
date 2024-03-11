import React from "react";

function Section8() {
  return (
    <div className="section8">
      <div className="overlay"></div>
      <div className="background-image">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="container">
                <p>
                  Egestam och Mattsson har antagit en policy som aktivt stödjer
                  de globala målen för hållbar utveckling. Denna policy
                  innefattar åtaganden att minska miljöpåverkan från
                  verksamheten, främja energieffektivitet i alla projekt, och
                  bidra till att bygga hållbara samhällen. Företaget strävar
                  efter att integrera hållbara metoder i alla aspekter av sin
                  affärsmodell, från design och installation till drift och
                  underhåll. Genom att arbeta nära med kunder och
                  samarbetspartners, siktar Egestam och Mattsson på att vara en
                  drivkraft för positiv förändring och innovation inom sitt
                  område, i linje med de globala hållbarhetsmålen.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img src={process.env.PUBLIC_URL + "/images/adv.png"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section8;
