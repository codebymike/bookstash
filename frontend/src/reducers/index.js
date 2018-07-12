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
export function selectAPIURL(state){
  const base = state.apiUrl.base
  const sort_order = selectSortOrder(state)
  return `${base}?sort=${sort_order}`
}

export function selectSortOrder(state){
  return state.apiUrl.sort_order
}

export function selectBookList(state){
  return state.books.books_list
}

export function selectToReadList(state){
  return state.books.to_read
}

export function selectHaveReadList(state){
  return state.books.have_read
}
