import React from 'react'
import SortLink from '../containers/SortLink'
import { BookSortOrder } from '../actions'

const Sort = () => (
  <div>
    <span>Order By: </span>
    <SortLink sort_order={BookSortOrder.DEFAULT}>
      Default
    </SortLink>
    <SortLink sort_order={BookSortOrder.POPULARITY}>
      Popularity
    </SortLink>
    <SortLink sort_order={BookSortOrder.OLDEST}>
      Oldest
    </SortLink>
    <SortLink sort_order={BookSortOrder.NEWEST}>
      Newest
    </SortLink>
    <SortLink sort_order={BookSortOrder.LONGEST}>
      Longest
    </SortLink>
    <SortLink sort_order={BookSortOrder.SHORTEST}>
      Shortest
    </SortLink>
  </div>
)

export default Sort
