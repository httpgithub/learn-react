import React, { Component } from "react";
import SearchBookForm from "../forms/SearchBookForm";
import PropTypes from "prop-types";
import Axios from "axios";

export class NewBookPage extends Component {
  state = {
    book: null
  };
  static propTypes = {};

  onBookSelect=(bookId) =>{
    Axios.get("`/api/books/fetchPages?goodreadsId=${bookId}`");
  }

  render() {
    return <div> <SearchBookForm onBookSelect={this.onBookSelect}/></div>;
  }
}

export default NewBookPage;
