import React from "react";
import "./style.css";

function Card() {
  return (
<div class=" h-100 d-flex justify-content-center align-items-center">
  <div class="error-card text-center">
    <div class=" d-flex justify-content-center">
    <h1 class="error-code ">404</h1>
    </div>
    <p>The page you are looking </p>
    <p class="text">for does not exist</p>
    <button  type="button" class="btn btn-warning card-button">Go Home</button>
  </div>
</div>
  );
}

export default Card;