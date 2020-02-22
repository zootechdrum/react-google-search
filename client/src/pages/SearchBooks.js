import React, { Component } from "react";
import booksImg from "../images/books1.png"
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron"
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";


class SearchBooks extends Component {
  state = {

    booksData:[]

  };

  componentDidMount() {
    this.loadBooks();
  }
  
  checkData = (data) => {

  }

  loadBooks = () => {
    API.getBooks()
    //  .then(res => console.log(res.data.items[0].volumeInfo.title))
    .then(res => res.data.items.filter( data => data.searchInfo ))
     .then(data => this.setState({booksData: data }))



  }
  callcon = () => {
    this.state.booksData.map((book,index) => {
      console.log(book)
      if(book.searchInfo !== undefined) {
        console.log(book.searchInfo.textSnippet)
      }
    })
  }

  render() {
    return (
      <div>
          <Jumbotron backgroundColor="#E6E6FA" >
            <img className="img-fluid books-img" src = {booksImg} alt="pokemon" />
          </Jumbotron>
        <div className="container">
          {this.state.booksData.length ? (
              <List>
                {this.state.booksData.map((book, index) => (
                  <ListItem >
                    <p>{book.volumeInfo.title}</p>
                    <img className="img-fluid books-img" src = {book.volumeInfo.imageLinks.thumbnail} alt="pokemon" />
                    <p>{book.searchInfo.textSnippet}</p>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
        </div>
        </div>
    );
  }
}

export default SearchBooks;
