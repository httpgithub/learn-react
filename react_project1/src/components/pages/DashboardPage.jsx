import React, { Component } from "react";
import PropTypes from "prop-types";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
import AddBookCtA from "../ctas/AddBookCtA";
import { connect } from "react-redux";
import { allBooksSelector } from "../../reducers/books";

class DashboardPage extends Component {
  render() {
    return (
      <div>
        {!this.props.isConfirmed && <ConfirmEmailMessage />}
        {this.props.books.length === 0 && <AddBookCtA />}
      </div>
    );
  }
}
DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};
function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed,
    /* 属性books需要的是Array 但是state中的books 是对象，需要reselect */
    // books: state.books
    books: allBooksSelector(state)
  };
}
export default connect(mapStateToProps)(DashboardPage);
