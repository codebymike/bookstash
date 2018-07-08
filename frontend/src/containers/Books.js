import React from 'react'
import { connect } from 'react-redux'
import { toggleToRead, toggleHaveRead } from '../actions'
import BookList from '../components/BookList'
import { getBooks, VisibilityFilters } from '../actions'

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

const getVisibleBooks = (books, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return books
    case VisibilityFilters.SHOW_HAVE_READ:
      return books.filter(b => b.have_read)
    case VisibilityFilters.SHOW_TO_READ:
      return books.filter(b => b.to_read)
    default:
      throw new Error('Unknown: ' + filter)
  }
}

const mapStateToProps = state => ({
  books: getVisibleBooks(state.books, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleToRead: id => dispatch(toggleToRead(id)),
  toggleHaveRead: id => dispatch(toggleHaveRead(id)),
  dispatchGetBooks: () => dispatch(getBooks())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Books)
