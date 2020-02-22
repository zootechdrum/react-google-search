import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Card() {
  return (
    <div className=" h-100 d-flex justify-content-center align-items-center">
      <div className="error-card text-center">
        <div className=" d-flex justify-content-center">
          <h1 className="error-code ">404</h1>
        </div>
        <p className="">The page you are looking </p>
        <p className="text">for does not exist</p>
        <a path="/">
          <button type="button" className="btn btn-warning card-button">Go Home</button>
        </a>
      </div>
    </div>
  );
}

export default Card;