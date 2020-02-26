import React from "react";
import "./style.css";

function Jumbotron({ children , backgroundColor , height }) {
  return (
    <div
      style={{ height, position:"relative", clear: "both",  textAlign: "center" , backgroundColor}}
      className="jumbotron jumbotron-fluid   "
    >
      {children}
    </div>
  );
}

export default Jumbotron;