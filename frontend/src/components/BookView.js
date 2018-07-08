import React from 'react'

const BookView = ( props ) => {
  const { title, image, author, rating, ratings, length, first_published, isbn } = props.book;

  return (
    <div id="book_page">
      <img src={ image } alt={ title } className="main"/>
      <h1>{ title }</h1>
      <h2>by {author}</h2>
      <dl>
        <dt>First Published</dt><dd>{ first_published }</dd>
        <dt>Rating</dt><dd>{ rating }/5</dd>
        <dt>Number of Ratings</dt><dd>{ ratings }</dd>
        <dt>Length</dt><dd>{ length } pages</dd>
        <dt>ISBN</dt><dd>{ isbn }</dd>
      </dl>
    </div>
  )
}

export default BookView
