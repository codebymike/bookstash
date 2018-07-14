import React from 'react'
import Books from '../containers/Books'
import Pagination from '../containers/Pagination'
import Filter from './Filter'
import Sort from './Sort'

const Main = () => (
    <div>
      <Filter />
      <Books />
      <Pagination />
      <Sort />
    </div>

)

export default Main
