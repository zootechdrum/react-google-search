import React, { Component } from "react";
import booksImg from "../images/books1.png"
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron"
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";


class SearchBooks extends Component {
  state = {

    booksData:["Hello"]

  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
    // .then(res => console.log(res.data))
    .then(res => this.setState({ booksData: res.data.items }))


  }


  render() {
    return (
        <div className="conatiner">
          <Jumbotron backgroundColor="#E6E6FA" >
            <img className="img-fluid" src = {booksImg} alt="pokemon" />
          </Jumbotron>
          {this.state.booksData.length ? (
              <List>
                {this.state.booksData.map(book => (
                  <ListItem >
                    <p>{book.id}</p>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
        </div>
    );
  }
}

export default SearchBooks;
