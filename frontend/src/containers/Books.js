import React from 'react'
import { connect } from 'react-redux'
import { toggleToRead, toggleHaveRead } from '../actions'
import BookList from '../components/BookList'
import { getBooks, VisibilityFilters } from '../actions'
import { selectBookList, selectToReadList, selectHaveReadList } from '../reducers'

class Books extends React.Component {

  componentDidMount = () => {
    this.props.dispatchGetBooks( getBooks() );
  }

  render = () => {
    return (
      <BookList {...this.props}/>
    )
  }
}

const getVisibleBooks = (books, filter, have_read_list, to_read_list) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return books
    case VisibilityFilters.SHOW_HAVE_READ:
      return books.filter(b =>  have_read_list.indexOf(b.id) !== -1)
    case VisibilityFilters.SHOW_TO_READ:
      return books.filter(b => to_read_list.indexOf(b.id) !== -1)
    default:
      throw new Error('Unknown: ' + filter)
  }
}


const mapStateToProps = state => {

  const have_read_list = selectHaveReadList(state)
  const to_read_list = selectToReadList(state)

  return {
    books: getVisibleBooks(selectBookList(state), state.visibilityFilter, have_read_list, to_read_list),
    have_read_list,
    to_read_list
  }
}

const mapDispatchToProps = dispatch => ({
  toggleToRead: id => dispatch(toggleToRead(id)),
  toggleHaveRead: id => dispatch(toggleHaveRead(id)),
  dispatchGetBooks: () => dispatch(getBooks())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Books)
