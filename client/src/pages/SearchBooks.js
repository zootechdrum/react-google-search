import React, { Component } from "react";
import booksImg from "../images/books1.png"
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron"
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";


class SearchBooks extends Component {
  state = {

    booksData:[],
    searchNewBook:''

  };

  componentDidMount() {
    this.loadBooks();
  }

  handleInputChange = event => {
   // Destructure the name and value properties off of event.target
  // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //This function is to validate data that comes back grom api call.
  // Makes sure all data is available so it does not brake our app
  dataValidator = arr => {
    if(arr.volumeInfo.imageLinks !== undefined &&
       arr.volumeInfo.description !== undefined &&
       arr.searchInfo !== undefined
    ) 
    {
      return arr;
    }
  }

  saveBook = (id) => {
    console.log(id)
    for( let i = 0; i < this.state.booksData.length; i++) {
      if (this.state.booksData[i].id === id ) {
            API.saveBook({
              title: this.state.booksData[i].volumeInfo.title,
              author: this.state.booksData[i].volumeInfo.authors[0],
              synopsis: this.state.booksData[i].volumeInfo.description,
              image: this.state.booksData[i].volumeInfo.imageLinks.thumbnail
        })
      }

    }

  }

  loadBooks = () => {
    API.getBooks()
    .then(res => res.data.items.filter( data => data.searchInfo ))
    // .then(data => console.log(data))
     .then(data => this.setState({booksData: data }))
  }

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behaviour and get new books
    event.preventDefault();
    API.getBooks(this.state.title)
    .then(res => res.data.items.filter(this.dataValidator))
    .then(data => this.setState({booksData: data }))

  };

  render() {
    return (
      <div>
          <Jumbotron backgroundColor="#E6E6FA" >
            <img className="img-fluid books-img" src = {booksImg} alt="book thumbnail" />
          </Jumbotron>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form>
                  <Input
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                    placeholder="Title (required)"
                  />
                  <FormBtn
                        onClick={this.handleFormSubmit}
                  >
                    Submit Book
                  </FormBtn>
                </form>            
            </div>
          </div>
          <div>
          {this.state.booksData.length ? (

              <List>
                {this.state.booksData.map((book, index) => (

                  <div className="card p-3" key = {book.id}>
                    <div className="row no-gutters">
                      <div className="col-md-4 text-center">
                        <img className="img-fluid books-img" src = {book.volumeInfo.imageLinks.thumbnail} alt="pokemon" />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{book.volumeInfo.title}</h5>
                          <p className="card-text">{book.volumeInfo.description.substr(0,150) + "..."}</p>
                          <p className="card-text"><small className="text-muted">Author: {book.volumeInfo.authors[0]} </small></p>
                          <div className="d-flex justify-content-start">
                            <a href={book.volumeInfo.infoLink} ><button className="btn btn-danger">More Info</button></a>
                            <button data-id = {book.id} onClick={(e) => this.saveBook(book.id)} className="btn btn-save btn-outline-dark">Save Book</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              </List>

            ) : (
              <h3>No Results to Display</h3>
            )}

        </div>
        </div>
        </div>
    );
  }
}

export default SearchBooks;
