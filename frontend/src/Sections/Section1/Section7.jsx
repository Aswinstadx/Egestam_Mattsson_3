import React from "react";

function Section7() {
  return (
    <div className="section7 d-none d-md-block">
      {window.innerWidth >= 1400 && window.innerWidth < 1500 ? (
        <>
          <div className="container">
            <div className="text">
              <h2>Projekt</h2>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <div className="section-7-card">
                  <img
                    src={process.env.PUBLIC_URL + "/images/section7-im1.png"}
                    className=""
                  />
                  <div className="mt-3">
                    <p>Malmö, Södertälje</p>
                    <h6>Konstent att bygga prisvärda & hållbara förskolor</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="section-7-card">
                  <img
                    src={process.env.PUBLIC_URL + "/images/section7-im1.png"}
                    className=""
                  />
                  <div className="mt-3">
                    <p>Malmö, Södertälje</p>
                    <h6>Konstent att bygga prisvärda & hållbara förskolor</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="container">
          <div className="text">
            <h2>Projekt</h2>
            <h2>Hör av dig till oss</h2>
          </div>
          <div className="row mt-3">
            <div className="col-md-4">
              <div className="section-7-card">
                <img
                  src={process.env.PUBLIC_URL + "/images/section7-im1.png"}
                  className=""
                />
                <div className="mt-3">
                  <p>Malmö, Södertälje</p>
                  <h6>Konstent att bygga prisvärda & hållbara förskolor</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="section-7-card">
                <img
                  src={process.env.PUBLIC_URL + "/images/section7-im1.png"}
                  className=""
                />
                <div className="mt-3">
                  <p>Malmö, Södertälje</p>
                  <h6>Konstent att bygga prisvärda & hållbara förskolor</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="section-7-card">
                <img
                  src={process.env.PUBLIC_URL + "/images/section7-im2.png"}
                  className=""
                  style={{ width: "443px" }}
                />
                <div className="mt-3">
                  <h6>Behöver du hjälp med något ? Kontakta oss idag!</h6>
                </div>
                <div className="card-buttons">
                  <button>
                    Hitta till vårt kontor
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M10.5378 4.21L10.6156 4.27333L13.9489 7.60666L13.99 7.65333L14.0367 7.72222L14.07 7.78888L14.0922 7.85777L14.1056 7.92L14.1111 7.99999L14.1078 8.05888L14.0922 8.14222L14.07 8.21222L14.0122 8.31555L13.9611 8.37888L10.6156 11.7267C10.5176 11.8251 10.3863 11.8832 10.2475 11.8897C10.1088 11.8961 9.97268 11.8503 9.86602 11.7614C9.75936 11.6724 9.68988 11.5467 9.67129 11.4091C9.65269 11.2715 9.68632 11.1318 9.76555 11.0178L9.82889 10.94L12.2144 8.55555H2.44444C2.30561 8.55581 2.17172 8.50407 2.06913 8.41054C1.96654 8.31701 1.90268 8.18845 1.89014 8.05019C1.87759 7.91193 1.91727 7.77398 2.00135 7.66352C2.08544 7.55305 2.20783 7.47806 2.34444 7.45333L2.44444 7.44444H12.2144L9.82889 5.06C9.73703 4.96793 9.68037 4.84656 9.6688 4.71702C9.65723 4.58749 9.69147 4.45799 9.76555 4.35111L9.82889 4.27333C9.9092 4.1933 10.0121 4.13977 10.1237 4.1199C10.2353 4.10004 10.3503 4.11481 10.4533 4.16222L10.5378 4.21Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                  <button style={{ marginLeft: "20px" }}>
                    <span>Ring oss direkt</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <path
                        d="M11.2078 4.21L11.2856 4.27333L14.6189 7.60666L14.66 7.65333L14.7067 7.72222L14.74 7.78888L14.7622 7.85777L14.7756 7.92L14.7811 7.99999L14.7778 8.05888L14.7622 8.14222L14.74 8.21222L14.6822 8.31555L14.6311 8.37888L11.2856 11.7267C11.1876 11.8251 11.0563 11.8832 10.9175 11.8897C10.7788 11.8961 10.6427 11.8503 10.536 11.7614C10.4294 11.6724 10.3599 11.5467 10.3413 11.4091C10.3227 11.2715 10.3563 11.1318 10.4356 11.0178L10.4989 10.94L12.8844 8.55555H3.11444C2.97561 8.55581 2.84172 8.50407 2.73913 8.41054C2.63653 8.31701 2.57268 8.18845 2.56013 8.05019C2.54759 7.91193 2.58727 7.77398 2.67135 7.66352C2.75544 7.55305 2.87783 7.47806 3.01444 7.45333L3.11444 7.44444H12.8844L10.4989 5.06C10.407 4.96793 10.3504 4.84656 10.3388 4.71702C10.3272 4.58749 10.3615 4.45799 10.4356 4.35111L10.4989 4.27333C10.5792 4.1933 10.6821 4.13977 10.7937 4.1199C10.9053 4.10004 11.0203 4.11481 11.1233 4.16222L11.2078 4.21Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Section7;
