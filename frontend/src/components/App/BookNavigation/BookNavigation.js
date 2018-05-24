import React from 'react';
import './BookNavigation.css';

const BookNavigation = () => {
  return (
    <aside>
      <dl>
        <dt>Go to</dt>
        <dd>
          <ul>
            <li><a href="#">Something</a></li>
          </ul>
        </dd>
      </dl>
      <dl>
        <dt>Jump to</dt>
        <dd>
          <ul>
            <li><a href="#">Something</a></li>
          </ul>
        </dd>
      </dl>
    </aside>
  )
}

export default BookNavigation;
