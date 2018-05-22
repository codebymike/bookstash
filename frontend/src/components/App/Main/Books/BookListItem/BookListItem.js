import React from 'react';
import './BookListItem.css';
import { Link } from 'react-router-dom';

const BookListItem = ({ book, toggleRead }) => {
  const {id, title, author, image, rating} = book;
  const read = (book.read) || false;

  // TODO - move this to a helper function
  const url_author = author.toLowerCase().replace(/ /g,'-');
  const url_title = title.toLowerCase().replace(/ /g,'-');

  return (
    <li className={`BookListItem ${ read ? 'read' : 'unread' }`} >
      <Link to={ `${url_author}/${url_title}/${id}` } >
        <img src={ image } alt={ title } />
        <div className="book_stub" id={ id }>
          <span className="title">{ title }</span>
          <span className="author">{ author }</span>
          <span className="rating">{ rating }</span>
          <button onClick={ (e) => toggleRead(e, id) }>Mark as { read ? 'unread' : 'read' }</button>
        </div>
      </Link>
    </li>
  )
};

export default BookListItem;
