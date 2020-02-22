import React, { Component } from "react";
import booksImg from "../images/books1.png"
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron"
import { Link } from "react-router-dom";


class SearchBooks extends Component {
  state = {

  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
    .then(res => console.log(res.data))
  };



  render() {
    return (
        <div className="conatiner">
          <Jumbotron backgroundColor="#E6E6FA" >
          <img className="img-fluid" src = {booksImg} alt="pokemon" />
          </Jumbotron>
          
        </div>
    );
  }
}

export default SearchBooks;
