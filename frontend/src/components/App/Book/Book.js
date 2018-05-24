import React from 'react';
import './Book.css';

class Book extends React.Component{

  state = {
    book: {}
  }

  componentDidMount = () => {
    // this.fetchBooks( this.props.url );
    this.fetchBook( this.props.match.params.book_id );
  }

  fetchBook = async (id) => {
    fetch( `https://b1w5pwo5bd.execute-api.eu-west-1.amazonaws.com/latest/books/${ id }` )
      .then(response => response.json())
      .then(book => this.setState({ book }))
      .catch(error => console.log(error));
  }

  render = () => {

    const { title, image, author, rating, ratings, length, first_published, isbn } = this.state.book;

    return (
      <div id="book_page">
        <h1>{ title }</h1>
        <img src={ image } alt={ title }/>
        <dl>
          <dt>Author</dt><dd>{ author }</dd>
          <dt>First Published</dt><dd>{ first_published }</dd>
          <dt>Rating</dt><dd>{ rating }</dd>
          <dt>Ratings</dt><dd>{ ratings }</dd>
          <dt>Length</dt><dd>{ length }</dd>
          <dt>ISBN</dt><dd>{ isbn }</dd>
        </dl>
      </div>
    )
  }


}

export default Book;
