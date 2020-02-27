import React, { Component } from "react";
import booksImg from "../images/books1.png"
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron"
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import BookCard from "../components/BookCard";


class SearchBooks extends Component {
  state = {

    booksData:[],
    searchNewBook:'',
    savedStatus:false

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
    for( let i = 0; i < this.state.booksData.length; i++) {
      if (this.state.booksData[i].id === id ) {
            API.saveBook({
              title: this.state.booksData[i].volumeInfo.title,
              author: this.state.booksData[i].volumeInfo.authors[0],
              description: this.state.booksData[i].volumeInfo.description,
              image: this.state.booksData[i].volumeInfo.imageLinks.thumbnail,
              link: this.state.booksData[i].volumeInfo.infoLink
        })
        this.setState({savedStatus:true})
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
          <Jumbotron backgroundColor="#E6E6FA" height={300} >
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
                  < BookCard
                  id={book.id}
                  title={book.volumeInfo.title}
                  image={book.volumeInfo.imageLinks.thumbnail}
                  author={book.volumeInfo.authors[0]}
                  descr={book.volumeInfo.description}
                  link={book.volumeInfo.infoLink}
                  btnText = {"Save Book"}
                  onClick={(e) => this.saveBook(book.id)}
                  btnStatus = {this.state.savedStatus}
                />

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
