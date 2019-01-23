import React, { Component } from "react";
import SearchBookForm from "../forms/SearchBookForm";
import BookForm from "../forms/BookForm";
import PropTypes from "prop-types";
import Axios from "axios";

export class NewBookPage extends Component {
  state = {
    book: null
  };
  static propTypes = {};

  onBookSelect=(bookId) =>{
    Axios.get(`/api/books/fetchPages?goodreadsId=${bookId}`).then(resp =>resp.data).then(book =>this.setState({book}));
  }

  render() {
    return <div> <SearchBookForm onBookSelect={this.onBookSelect}/>
    {this.state.book && <BookForm book={this.state.book}></BookForm>}
    </div>;
  }
}

export default NewBookPage;
