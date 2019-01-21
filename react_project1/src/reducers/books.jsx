import {createSelector} from "reselect"
const initialState = {

}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "typeName":
    return { ...state, ...payload }

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