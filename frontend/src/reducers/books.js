const books = (state = [], action) => {
  switch ( action.type ){
    case 'TOGGLE_TO_READ':
      return state.map(book =>
        (book.id === action.id)
          ? {...book, to_read: !book.to_read}
          : book
      )
    case 'TOGGLE_HAVE_READ':
      return state.map(book =>
        (book.id === action.id)
          ? {...book, have_read: !book.have_read}
          : book
      )
    // case 'REQUEST_BOOKS': //loading state
    case 'SET_BOOKS':
      return [...action.books]
    default:
      return state
  }
}


export default books
