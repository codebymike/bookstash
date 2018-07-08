import { combineReducers } from 'redux'
import books from './books'
import book from './book'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  books,
  book,
  visibilityFilter
})
