import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers'
import rootSaga from './sagas'
import { getBooks } from './actions'
// import book_json from './data/books'

// const books = book_json.map( (b, i) => {
//   return {
//     id: i,
//     ...b
//   }
// });

const defaultState = {
  books: [],
  visibilityFilter: 'SHOW_ALL'
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  defaultState,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(rootSaga)

store.dispatch(getBooks())

export default store
