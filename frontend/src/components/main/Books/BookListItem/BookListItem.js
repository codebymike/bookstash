import React from 'react';
import './BookListItem.css';

const BookListItem = ({ book }) => {
  const {id, title, author, image} = book;

  return (
    <li className="BookListItem">
      <img src={ image } alt={ title } />
      <div className="book_stub" id={ id }>
        <span className="title">{ title }</span>
        <span className="author">{ author }</span>
        <span className="rating">4.6</span>
      </div>
    </li>
  )
};

export default BookListItem;
