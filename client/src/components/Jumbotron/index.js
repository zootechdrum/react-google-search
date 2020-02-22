import React from "react";

function Jumbotron({ children , backgroundColor }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 75, textAlign: "center" , backgroundColor}}
      className="jumbotron jumbotron-fluid"
    >
      {children}
    </div>
  );
}

export default Jumbotron;