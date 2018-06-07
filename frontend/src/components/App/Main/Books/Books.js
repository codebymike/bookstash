import React from 'react';
import './Books.css';
import BookListItem from './BookListItem/BookListItem';

class Books extends React.Component{

  state = {
    books: [],
    read: [],
  }

  componentDidMount = async () => {
    await this.setState({ read: this.localStore('bookstash.readlist') });
    this.fetchBooks( this.props.url );
  }

  componentWillReceiveProps = (nextProps) => {
    // console.log(nextProps.url);
    if (this.props.url !== nextProps.url) {
      this.fetchBooks(nextProps.url);
    }
  }

  fetchBooks = (url) => {
    fetch( url )
      .then(response => response.json())
      .then(data => this.storeBooks(data))
      .catch(error => console.log(error));
  }

  storeBooks = ( books ) => {
    let read_books = books.map( book => {
        return {
          ...book,
          read: this.state.read.includes(book.id)
        }
    });

    this.setState({ books: read_books });
  }

  //TODO move to helper functions
  localStore = (namespace, data) => {
    if (data) return localStorage.setItem(namespace, JSON.stringify(data))

    let datastored = localStorage.getItem(namespace)
    return (datastored && JSON.parse(datastored)) || []
  }

  //TODO refactor into smaller functions
  toggleRead = (id, e) => {

      e.preventDefault();

      // update the read state in tootle inclusion of id
      let read = [...this.state.read];
      let read_idx = read.indexOf(id);
      if( read_idx !== -1 ){
        read.splice(read_idx, 1);
      }else{
        read.push(id);
      }
      this.setState({ read });

      // update the local storage for read books
      this.localStore('bookstash.readlist', read );

      // update the state to mark books as read
      let books = [...this.state.books];
      let book_idx = books.findIndex( book => book.id === id );
      let book = {
        ...books[ book_idx ],
        read: ( read_idx !== -1 ) ? false : true
      };

      books[ book_idx ] = book;
      this.setState({ books });
  }

  render = () => {
    return (
      <ul className="Books">
        {this.state.books.map( book => (
          <BookListItem key={ book.id } book={ book } toggleRead={ this.toggleRead } />
        ))}
      </ul>
    )
  }
}

export default Books;
