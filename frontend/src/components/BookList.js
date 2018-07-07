import React from 'react'
import BookItem from './BookItem'

const BookList = ({ books, toggleToRead, toggleHaveRead }) => (
  <ul>
    {books.map(book =>
      <BookItem
        key={book.id}
        {...book}
        toggleToRead={() => toggleToRead(book.id)}
        toggleHaveRead={() => toggleHaveRead(book.id)}
      />
    )}
  </ul>
)

export default BookList
