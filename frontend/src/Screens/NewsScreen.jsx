import React from "react";
import NewsBanner from "../Components/News/NewsBanner";
import Card from "../Components/Card/Card";
import Footer from "../Components/Footer/Footer";

function NewsScreen() {
  return (
    <div>
      <NewsBanner />
      <div className="container" style={{ marginBottom: "40px" }}>
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
        <div className="card-container mt-0">
          {[...Array(9)].map((_, index) => (
            <Card key={index} title={`Card ${index + 1}`} />
          ))}
        </div>
        <div className="" style={{ float: "right" }}>
          <select
            className="mt-5 card-select"
            style={{ top: "22px", position: "relative", float: "right" }}
          >
            <option>Visa fler</option>
            <option>Kategori</option>
            <option>Kategori</option>
            <option>Kategori</option>
            <option>Kategori</option>
          </select>
        </div>
      </div>

      <footer className="mt-5 w-100" style={{top:'100px',position:'relative'}}>
        <Footer />
      </footer>
    </div>
  );
}

export default NewsScreen;
