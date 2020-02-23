import axios from "axios";

export default {
  // Gets all books
  getBooks: function(title) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}`);
  },

};