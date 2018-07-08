const book = (state = [], action) => {
  switch ( action.type ){
    case 'SET_BOOK':
      return action.book
    default:
      return state
  }
}


export default book
