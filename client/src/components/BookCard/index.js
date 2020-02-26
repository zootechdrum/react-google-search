import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function BookCard() {
  return (

    <div className="card p-3" key = {book.id}>
    <div className="row no-gutters">
      <div className="col-md-4 text-center">
        <img className="img-fluid books-img" src = {book.image} alt="pokemon" />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <p className="card-text">{book.synopsis.substr(0,150) + "..."}</p>
          <p className="card-text"><small className="text-muted">Author: {book.author} </small></p>
          <div className="d-flex justify-content-start">
            <a href={book.link} ><button className="btn btn-danger">More Info</button></a>
            <button data-id = {book.id} onClick={(e) => this.saveBook(book.id)} className="btn btn-save btn-outline-dark">Delete Book</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default BookCard;