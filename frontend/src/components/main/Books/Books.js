import React from 'react';
import './Books.css';
import BookListItem from './BookListItem/BookListItem';

class Books extends React.Component{

  state = {
    books: []
  }

  componentDidMount() {
    const books = [
      {
        'id': 1,
        'title': 'Dune'
      },
      {
        'id': 2,
        'title': 'Ender\'s Game'
      },
      {
        'id': 3,
        'title': '2001: A Space Odyssey'
      }
    ];

    this.setState({ books });
  }

  render() {
    return (
      <ul className="book_list">
        {this.state.books.map( book => (
          <BookListItem key={ book.id } book={ book } />
        ))}
      </ul>
    )
  }
}

export default Books;
