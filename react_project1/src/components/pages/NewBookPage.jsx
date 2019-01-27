import React, { Component } from "react";
import SearchBookForm from "../forms/SearchBookForm";
import BookForm from "../forms/BookForm";
import PropTypes from "prop-types";
import Axios from "axios";
import { connect } from "react-redux";
import { createBook } from "../../actions/books";
export class NewBookPage extends Component {
  state = {
    book: null
  };
  static propTypes = {
    createBook: PropTypes.func.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired
  };

  onBookSelect = bookId => {
    Axios.get(`/api/books/fetchPages?goodreadsId=${bookId}`)
      .then(resp => resp.data)
      .then(book => this.setState({ book }));
  };
  addBook = book => {
    const tmp = { ...book };
    tmp.author = book.author.name;
    tmp.imageUrl = book.image_url;
    this.props
      .createBook(tmp)
      .then(() => this.props.history.push("/dashboard"));
  };

  render() {
    return (
      <div>
        {" "}
        <SearchBookForm onBookSelect={this.onBookSelect} />
        {this.state.book && (
          <BookForm book={this.state.book} addBook={this.addBook} />
        )}
      </div>
    );
  }
}

export default connect(
  null,
  { createBook }
)(NewBookPage);
