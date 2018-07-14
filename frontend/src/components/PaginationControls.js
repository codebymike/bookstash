import React from 'react'

const PaginationControls = ({ page_number, incrementPage, decrementPage }) => (
  <p>
    { page_number > 1 && <button onClick={decrementPage}>Previous</button> }
     <button onClick={incrementPage}>Next</button>
  </p>
)

export default PaginationControls
