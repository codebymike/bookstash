'use strict';

const Api = require('claudia-api-builder');
const api = new Api();
const books = require('./data/20.json');

api.get('/', () => 'Welcome to the BookStash API');

api.get('/books', () => {
  return books.map( book => {
      return {
        ...book,
        id: book.isbn
      }
  });
});

module.exports = api
