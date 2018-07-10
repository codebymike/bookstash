import { BookSortOrder } from '../actions'

const initialState = {
  base: 'https://b1w5pwo5bd.execute-api.eu-west-1.amazonaws.com/latest/books',
  sort_order: BookSortOrder.DEFAULT
}

const apiUrl = (state = initialState, action) => {
  switch ( action.type ){
    case 'SET_SORT_ORDER':
      return {
        ...state,
        sort_order: action.order
      }
    default:
      return state
  }
}


export default apiUrl
