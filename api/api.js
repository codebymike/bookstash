'use strict';

const Api = require('claudia-api-builder');
const api = new Api();
const books = require('./data/20.json');

api.get('/', () => 'Welcome to the BookStash API');

api.get('/books', (request) => {

  let book_data = books.map( book => {
      return {
        ...book,
        id: book.isbn
      }
  });

  //Filter
  //TODO generalise this
  if( request.queryString['year.min'] && request.queryString['year.max'] ){
    let min = request.queryString['year.min'];
    let max = request.queryString['year.max'];
    book_data = book_data.filter( book => book.first_published >= min && book.first_published <= max );
  }

  //TODO a better way to organise this
  if( request.queryString.sort ){
    let sort_func;

    switch( request.queryString.sort ){
      case "popularity":
        sort_func = ( a,b ) => b.ratings - a.ratings;
        break;
      case "oldest":
        sort_func = ( a,b ) => a.first_published - b.first_published;
        break;
      case "newest":
        sort_func = ( a,b ) => b.first_published - a.first_published;
        break;
      case "longest":
        sort_func = ( a,b ) => b['length'] - a['length'];
       break;
      case "shortest":
        sort_func = ( a,b ) => a['length'] - b['length'];
        break;
    }

    book_data = book_data.sort(sort_func);
  }

  return book_data;
});

api.get('/books/{id}', (request) => {

  return books.find( book => book.isbn === request.pathParams.id );

}, {
  error: 404
})

module.exports = api
