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

      const to_read_id = state.books_list.findIndex( b => b.id === action.id )

      return {
        ...state,
        books_list: [
          ...state.books_list.slice(0,to_read_id),
          {
            ...state.books_list[to_read_id],
            to_read: !state.books_list[to_read_id].to_read
          },
          ...state.books_list.slice(to_read_id + 1)
        ],
        to_read: toggle(state.to_read, action.id)
      }

    case 'TOGGLE_HAVE_READ':

      const have_read_id = state.books_list.findIndex( b => b.id === action.id )

      return {
        ...state,
        books_list: [
          ...state.books_list.slice(0,have_read_id),
          {
            ...state.books_list[have_read_id],
            have_read: !state.books_list[have_read_id].have_read
          },
          ...state.books_list.slice(have_read_id + 1)
        ],
        have_read: toggle(state.have_read, action.id)
      }

    // case 'REQUEST_BOOKS': //loading state
    case 'SET_BOOKS':

      const books_list = action.books.map( b => ({
          ...b,
          to_read: state.to_read.indexOf(b.id) !== -1,
          have_read: state.have_read.indexOf(b.id) !== -1
        })
      )

      return {
        ...state,
        books_list
      }
    default:
      return state
  }
}


export default books
