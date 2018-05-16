import React from 'react';
import './BookListItem.css';

const BookListItem = ({ book }) => {
  const {id, title} = book;

  return (
    <li>
      <span id={id}>{ title }</span>
    </li>
  )
};

export default BookListItem;
