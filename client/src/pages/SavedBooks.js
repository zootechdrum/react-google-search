import React, { Component } from "react";
import booksImg from "../images/books1.png"
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import BookCard from "../components/BookCard";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";


class SavedBooks extends Component {
  state = {

    savedData: [],
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
  };





  loadSavedBooks = () => {
    API.getSavedBooks()
      .then(res => this.setState({ savedData: res.data }))

  }




  render() {
    // Implented search functionality for saved books. 
    // Destructures title and saved book from state
    // only items that are found in list will be show
    const { title, savedData } = this.state;
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
                  < BookCard
                    id={book.id}
                    image={book.image}
                    author={book.author}
                    descr={book.description}
                    link={book.link}
                    btnText = {"Delete Book"}
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

export default SavedBooks;
