export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_HAVE_READ: 'SHOW_HAVE_READ',
  SHOW_TO_READ: 'SHOW_TO_READ'
}

export const BookSortOrder = {
  DEFAULT: 'default',
  POPULARITY: 'popularity',
  OLDEST: 'oldest',
  NEWEST: 'newest',
  LONGEST: 'longest',
  SHORTEST: 'shortest'
}

export const toggleToRead = id => ({
  type: 'TOGGLE_TO_READ',
  id
})

export const toggleHaveRead = id => ({
  type: 'TOGGLE_HAVE_READ',
  id
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const catchError = error => ({
  type: 'ERROR',
  error
})

export const getBooks = () => ({
  type: 'INIT_BOOKS_SAGA'
})

export const requestBooks = () => ({
  type: 'REQUEST_BOOKS'
})

export const setBooks = books => ({
  type: 'SET_BOOKS',
  books
})

export const getBook = id => ({
  type: 'INIT_BOOK_SAGA',
  id
})

export const requestBook = id => ({
  type: 'REQUEST_BOOK',
  id
})

export const setBook = book => ({
  type: 'SET_BOOK',
  book
})

export const setSortOrder = order => ({
  type: 'SET_SORT_ORDER',
  order
})

export const getNextPage = () => ({
  type: 'INC_PAGE_NUMBER'
})

export const getPrevPage = () => ({
  type: 'DEC_PAGE_NUMBER'
})
