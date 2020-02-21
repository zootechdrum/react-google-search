import React, { Component } from "react";

import API from "../utils/API";
import { Link } from "react-router-dom";


class SearchBooks extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
    .then(res => console.log(res.data))
      // .then(res =>
      //   this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      // )
      // .catch(err => console.log(err));
  };



  render() {
    return (
        <div className="conatiner">
          
        </div>
    );
  }
}

export default SearchBooks;
