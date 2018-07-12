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
  const sort_order = getSortOrder(state)
  return `${base}?sort=${sort_order}`
}

export function getSortOrder(state){
  return state.apiUrl.sort_order
}

export function getBookList(state){
  return state.books.books_list
}

export function getToReadList(state){
  return state.books.to_read
}

export function getHaveReadList(state){
  return state.books.have_read
}
