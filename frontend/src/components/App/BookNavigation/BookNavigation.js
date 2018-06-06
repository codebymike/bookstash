import React from 'react';
import './BookNavigation.css';

const BookNavigation = () => {
  return (
    <aside>
      <dl>
        <dt>Go</dt>
        <dd>
          <ul>
            <li><a href="/">Back to List</a></li>
          </ul>
        </dd>
      </dl>
    </aside>
  )
}

export default BookNavigation;
