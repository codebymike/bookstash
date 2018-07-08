const book = (state = {}, action) => {
  switch ( action.type ){
    case 'REQUEST_BOOK':
      return {}
    case 'SET_BOOK':
      return action.book
    default:
      return state
  }
}


export default book
