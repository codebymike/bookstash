import React from 'react'
import BookItem from './BookItem'

const BookList = ({ books, toggleToRead, toggleHaveRead, have_read_list, to_read_list }) => (
  <ul>
    {books.map(book =>
      <BookItem
        key={book.id}
        {...book}
        to_read={ to_read_list.indexOf(book.id) !== -1 }
        have_read={ have_read_list.indexOf(book.id) !== -1 }
        toggleToRead={() => toggleToRead(book.id)}
        toggleHaveRead={() => toggleHaveRead(book.id)}
      />
    )}
  </ul>
)

export default BookList
