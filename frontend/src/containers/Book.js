import React from 'react'
import { connect } from 'react-redux'
import BookView from '../components/BookView'
import { getBook } from '../actions'

class Book extends React.Component {

  componentDidMount() {
    const book_id = this.props.match.params.id
    this.props.dispatch( getBook( book_id ) );
  }

  render() {
    return (
      <BookView book={this.props.book}/>
    )
  }
}

const mapStateToProps = state => ({
  book: state.book
});

export default connect(mapStateToProps)(Book);
