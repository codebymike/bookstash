import React from 'react';
import { shallow } from 'enzyme';
import Book from './Book';

// global.fetch = require('jest-fetch-mock');
// Manual mocking
const fetchPromise = Promise.resolve({
  json: () => Promise.resolve(
    {
      "title": "Fahrenheit 451",
      "author": "Ray Bradbury",
      "image": "https://images.gr-assets.com/books/1351643740l/4381.jpg",
      "rating": "3.98",
      "ratings": 1266,
      "length": 175,
      "first_published": 1953,
      "isbn": "0307347974",
      "url": "https://www.goodreads.com/book/show/4381.Fahrenheit_451"
    }
  ),
})
global.fetch = () => fetchPromise

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

describe('Book Component', () => {

  it('should render without throwing an error', () => {
    expect(shallow( <Book match={{params: {book_id: '0307347974'}}} /> ).find('div#book_page').exists()).toBe(true)
  })

  it('should update the state when mounted', async () => {

    const book = shallow(<Book match={{params: {book_id: '0307347974'}}} />)

    await book.instance().componentDidMount()
    await sleep(500) // wait for fetchBook to update the state

    expect(book.state('book')).toHaveProperty('title', 'Fahrenheit 451')

  })

})
