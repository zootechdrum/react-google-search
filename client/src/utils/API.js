import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=coraline");
  },

};