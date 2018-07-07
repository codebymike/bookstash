import React from 'react'
import { Link } from 'react-router-dom'

const BookItem = ({ id, title, author, to_read, have_read, toggleToRead, toggleHaveRead }) => (
  <li>
    <Link to={{ pathname: `/book/${id}` }}>
      {title} {author}
    </Link>
        <button onClick={ toggleHaveRead } style={{ textDecoration: have_read ? 'line-through' : 'none' }}>
          Already Read
        </button>
        <button onClick={ toggleToRead } style={{ textDecoration: to_read ? 'line-through' : 'none' }}>
          Want to Read
        </button>
  </li>
)

export default BookItem
