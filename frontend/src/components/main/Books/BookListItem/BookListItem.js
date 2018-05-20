import React from 'react';
import './BookListItem.css';

const BookListItem = ({ book, toggleRead }) => {
  const {id, title, author, image} = book;
  const read = (book.read) || false;

  return (
    <li className={`BookListItem ${ read ? 'read' : 'unread' }`} >
      <img src={ image } alt={ title } />
      <div className="book_stub" id={ id }>
        <span className="title">{ title }</span>
        <span className="author">{ author }</span>
        <span className="rating">4.6</span>
        <button onClick={ () => toggleRead(id) }>Mark as { read ? 'unread' : 'read' }</button>
      </div>
    </li>
  )
};

export default BookListItem;
