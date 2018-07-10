import React from 'react'
import Books from '../containers/Books'
import Filter from './Filter'
import Sort from './Sort'

const Main = () => (
    <div>
      <Filter />
      <Books />
      <Sort />
    </div>

)

export default Main
