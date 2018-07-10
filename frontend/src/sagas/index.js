import { call, put, takeEvery, select } from 'redux-saga/effects';
import { requestBooks, setBooks, catchError, requestBook, setBook } from '../actions'
import { getAPIURL } from '../reducers'
import { fetchJSON } from '../fetch'

function* fetchBooksSaga(action) {
  yield put(requestBooks())
  const apiUrl = yield select( getAPIURL )
  const data = yield call(fetchJSON, apiUrl);
  if (data && !data.code) {
    yield put(setBooks(data))
  } else {
    yield put(catchError(data))
  }
}

function* fetchBookSaga(action) {
  yield put(requestBook())
  const data = yield call(fetchJSON, `https://b1w5pwo5bd.execute-api.eu-west-1.amazonaws.com/latest/books/${action.id}`);
  console.log(`https://b1w5pwo5bd.execute-api.eu-west-1.amazonaws.com/latest/books/${action.id}`)
  if (data && !data.code) {
    yield put(setBook(data))
  } else {
    yield put(catchError(data))
  }
}

export default function* rootSaga() {
  yield takeEvery(['INIT_BOOKS_SAGA','SET_SORT_ORDER'], fetchBooksSaga);
  yield takeEvery('INIT_BOOK_SAGA', fetchBookSaga);
}
