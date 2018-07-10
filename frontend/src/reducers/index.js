import { combineReducers } from 'redux'
import books from './books'
import book from './book'
import apiUrl from './apiUrl'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  books,
  book,
  apiUrl,
  visibilityFilter
})


// Selectors
export function getAPIURL(state){
  const base = state.apiUrl.base
  const sort_order = state.apiUrl.sort_order
  return `${base}?sort=${sort_order}`
}
