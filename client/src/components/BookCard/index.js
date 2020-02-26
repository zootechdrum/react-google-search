import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function BookCard({id , image, author, title, descr}) {
  return (

    <div className="card p-3" key = {id}>
    <div className="row no-gutters">
      <div className="col-md-4 text-center">
        <img className="img-fluid books-img" src = {image} alt="pokemon" />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{synopsis.substr(0,150) + "..."}</p>
          <p className="card-text"><small className="text-muted">Author: {author} </small></p>
          <div className="d-flex justify-content-start">
            <a href={book.link} ><button className="btn btn-danger">More Info</button></a>
            <button data-id = {id} onClick={(e) => this.saveBook(id)} className="btn btn-save btn-outline-dark">Delete Book</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default BookCard;