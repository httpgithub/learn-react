import api from "../api";
import { BOOKS_FETCHED, BOOK_CREATED } from "../types";
import { normalize } from "normalizr";
import { bookSchema } from "../schemas";
const booksFetched = data => ({
  type: BOOKS_FETCHED,
  data
});
export const fetchBooks = email => dispatch => {
  api.books
    .fetchAll(email)
    .then(books => dispatch(booksFetched(normalize(books, [bookSchema]))));
};
