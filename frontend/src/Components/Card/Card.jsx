import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CARD_IMAGE } from "../../Constants/urls";

function Card({ title }) {
  return (
    <div className="card-box">
      <img src={CARD_IMAGE} className="w-100" />
      <div className="container-fluid p-3">
        <h6 className="card-date">13 februari 2024</h6>
        <h2>Elektrifiering och framtidssäkring </h2>
        <p>Egestam och Mattsson leder vägen i digitaliseringens era</p>
        <button>
          Läs mer om detta
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
          >
            <path
              d="M12.8352 4.98626L12.9227 5.05751L16.6727 8.80751L16.7189 8.86001L16.7714 8.93751L16.8089 9.01251L16.8339 9.09001L16.8489 9.16001L16.8552 9.25001L16.8514 9.31626L16.8339 9.41001L16.8089 9.48876L16.7439 9.60501L16.6864 9.67626L12.9227 13.4425C12.8124 13.5532 12.6647 13.6187 12.5086 13.6259C12.3525 13.6331 12.1994 13.5816 12.0794 13.4815C11.9594 13.3815 11.8813 13.2401 11.8604 13.0852C11.8394 12.9304 11.8773 12.7733 11.9664 12.645L12.0377 12.5575L14.7214 9.87501H3.73016C3.57397 9.8753 3.42334 9.8171 3.30793 9.71188C3.19251 9.60665 3.12067 9.46203 3.10656 9.30648C3.09245 9.15094 3.13709 8.99575 3.23168 8.87147C3.32627 8.74719 3.46397 8.66284 3.61766 8.63501L3.73016 8.62501H14.7214L12.0377 5.94251C11.9343 5.83894 11.8706 5.7024 11.8576 5.55667C11.8445 5.41094 11.8831 5.26526 11.9664 5.14501L12.0377 5.05751C12.128 4.96748 12.2437 4.90725 12.3693 4.88491C12.4949 4.86257 12.6243 4.87918 12.7402 4.93251L12.8352 4.98626Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Card;
