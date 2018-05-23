import React from "react";
import "./Controls.css";

const Controls = ( props ) => (
  <dl>
    <dt>Sort by</dt>
    <dd>
      <ul>
        <li><a name="popularity" onClick={ props.setSortOrder.bind(this, 'popularity') }>Popularity</a></li>
        <li><a name="oldest" onClick={ props.setSortOrder.bind(this, 'oldest') }>Oldest</a></li>
        <li><a name="newest" onClick={ props.setSortOrder.bind(this, 'newest') }>Newest</a></li>
        <li><a name="longest" onClick={ props.setSortOrder.bind(this, 'longest') }>Longest</a></li>
        <li><a name="shortest" onClick={ props.setSortOrder.bind(this, 'shortest') }>Shortest</a></li>
      </ul>
    </dd>
  </dl>
)

export default Controls;
