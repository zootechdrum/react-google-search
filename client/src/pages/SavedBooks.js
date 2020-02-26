import React, { Component } from "react";
import booksImg from "../images/books1.png"
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron"
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";


class SavedBooks extends Component {
  state = {

    savedData:[],
    title: ''


  };

  componentDidMount() {
    this.loadSavedBooks();
  }

  handleInputChange = event => {
   // Destructure the name and value properties off of event.target
  // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state)
  };





  loadSavedBooks = () => {
    API.getSavedBooks()
    // .then(res => res.data.items.filter( data => data.searchInfo ))
    .then(res => this.setState({savedData: res.data}))
    // .then(res => console.log(res.data))
  }




  render() {
 // Implented search functionality for saved books. 
 // Destructures title and saved book from state
 // only items that are found in list will be show
    const {title, savedData } = this.state;
    const filterBook = savedData.filter(book => 
      book.title.toLowerCase().includes(title.toLowerCase())
    )

    return (
      <div>
          <Jumbotron backgroundColor="#E6E6FA" >
            <h1> This is your saved book </h1>
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
                </form>            
            </div>
          </div>
          <div>
          {this.state.savedData.length ? (

              <List>
                {filterBook.map((book, index) => (

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

export default SavedBooks;
