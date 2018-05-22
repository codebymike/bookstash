import React from "react";
import "./Controls.css";

const Controls = ( props ) => (
  <dl>
    <dt>Sort by</dt>
    <dd>
      <ul>
        <li><a name="popularity" onClick={ () => props.setSortOrder('popularity') }>Popularity</a></li>
        <li><a name="oldest" onClick={ () => props.setSortOrder('oldest') }>Oldest</a></li>
        <li><a name="newest" onClick={ () => props.setSortOrder('newest') }>Newest</a></li>
        <li><a name="longest" onClick={ () => props.setSortOrder('longest') }>Longest</a></li>
        <li><a name="shortest" onClick={ () => props.setSortOrder('shortest') }>Shortest</a></li>
      </ul>
    </dd>
  </dl>
)

export default Controls;
