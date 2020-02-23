import React, { Component } from "react";
import booksImg from "../images/books1.png"
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron"
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";


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
          <div className="row">
            <div class="col-12">
              <form>
                  <Input
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                    placeholder="Title (required)"
                  />
                  <FormBtn

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

                  <div className="card p-3">
                    <div className="row no-gutters">
                      <div className="col-md-4 text-center">
                      <img className="img-fluid books-img" src = {book.volumeInfo.imageLinks.thumbnail} alt="pokemon" />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">{book.searchInfo.textSnippet}</p>
                          <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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
