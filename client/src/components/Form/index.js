import React from "react";
import "./style.css";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control book-search-input" {...props} />
    </div>
  );
}


export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn submit-btn btn-light">
      {props.children}
    </button>
  );
}
