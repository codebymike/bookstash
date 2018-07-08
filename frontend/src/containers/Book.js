import React from 'react'
import { connect } from 'react-redux'
import BookView from '../components/BookView'
import { getBook } from '../actions'

class Book extends React.Component {

  componentDidMount() {
    this.props.dispatch( getBook('0307347974') );
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
