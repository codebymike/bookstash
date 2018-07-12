import { toggle } from '../helpers'

const initialState = {
  books_list: [],
  to_read: [],
  have_read: []
}

const books = (state = initialState, action) => {

  // console.log(state)

  switch ( action.type ){
    case 'TOGGLE_TO_READ':
      return {
        ...state,
        to_read: toggle(state.to_read, action.id)
      }
    case 'TOGGLE_HAVE_READ':
      return {
        ...state,
        have_read: toggle(state.have_read, action.id)
      }
    // case 'REQUEST_BOOKS': //loading state
    case 'SET_BOOKS':
      return {
        ...state,
        books_list: action.books
      }
    default:
      return state
  }
}


export default books
