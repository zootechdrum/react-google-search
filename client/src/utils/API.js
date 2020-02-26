import axios from "axios";

export default {

    // Gets all saved books
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // Gets all books
  getBooks: function(title = "python programming") {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}`);
  },
    deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },

  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }

};

