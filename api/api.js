'use strict';

const Api = require('claudia-api-builder');
const api = new Api();

api.get('/', () => 'Welcome to the BookStash API');

api.get('/books', () => {
  return [{
            'id': 1,
            'title': 'Dune'
          },
          {
            'id': 2,
            'title': 'Ender\'s Game'
          },
          {
            'id': 3,
            'title': '2001: A Space Odyssey'
          }];
});

module.exports = api
