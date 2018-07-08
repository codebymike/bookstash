import { combineReducers } from 'redux'
import books from './books'
import book from './book'
import apiUrl from './apiUrl'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  books,
  book,
  apiUrl
  visibilityFilter
})
