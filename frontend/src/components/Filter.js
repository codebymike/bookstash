import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Filter = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_HAVE_READ}>
      Read
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_TO_READ}>
      Want to Read
    </FilterLink>
  </div>
)

export default Filter
