import React from "react";
import NewsBanner from "../Components/News/NewsBanner";
import Card from "../Components/Card/Card";

function NewsScreen() {
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
    </div>
  );
}

export default NewsScreen;
