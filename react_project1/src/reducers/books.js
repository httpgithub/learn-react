import {createSelector} from "reselect";
import { BOOKS_FETCHED } from '../types'
const initialState = {

}

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case BOOKS_FETCHED:
    return { ...state, ...action.data.entities.books }

  default:
    return state
  }
}

// {
//     111:{....},
//     222:{....},
// }


//selectors
export const bookSelector = state=>state.books;

export const allBooksSelector=createSelector(bookSelector,booksHash=>{
    return Object.values(booksHash);
})