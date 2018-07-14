import { BookSortOrder } from '../actions'

const initialState = {
  base: 'https://b1w5pwo5bd.execute-api.eu-west-1.amazonaws.com/latest/books',
  sort_order: BookSortOrder.DEFAULT,
  page_size: 8,
  page_number: 1
}

const apiUrl = (state = initialState, action) => {
  switch ( action.type ){
    case 'SET_SORT_ORDER':
      return {
        ...state,
        sort_order: action.order
      }
    case 'INC_PAGE_NUMBER':
      return {
        ...state,
        page_number: state.page_number + 1
      }
    case 'DEC_PAGE_NUMBER':
      return {
        ...state,
        page_number: ( state.page_number <= 1 ) ? 1 : state.page_number - 1
      }
    default:
      return state
  }
}


export default apiUrl
