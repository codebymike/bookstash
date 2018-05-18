import React from 'react';
import './Books.css';
import BookListItem from './BookListItem/BookListItem';

class Books extends React.Component{

  state = {
    books: []
  }

  componentDidMount() {
    const apiUrl = `https://b1w5pwo5bd.execute-api.eu-west-1.amazonaws.com/latest/books`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => this.storeBooks(data))
      .catch(error => console.log(error));
  }

  storeBooks = books => {
    this.setState({ books });
  }

  render() {
    return (
      <ul className="Books">
        {this.state.books.map( book => (
          <BookListItem key={ book.id } book={ book } />
        ))}
      </ul>
    )
  }
}

export default Books;
