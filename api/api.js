'use strict';

const Api = require('claudia-api-builder');
const api = new Api();

api.get('/', () => 'Welcome to the BookStash API');

api.get('/books', () => {
  return [{
            "id": 1,
            "title": "Dune",
            "author": "Frank Herbert",
            "first_published": "1965",
            "pages": "604",
            "isbn": "0340839937",
            "image": "https://images.gr-assets.com/books/1434908555l/234225.jpg",
            "goodreads":{
              "url": "https://www.goodreads.com/book/show/234225.Dune",
              "rating": "4.2",
              "ratings": 564192
            },
            "amazon":{
              "url": "https://www.amazon.com/Dune-Frank-Herbert/dp/0441172717",
              "rating": "4.6",
              "ratings": 2912
            },
            "wikipedia":{
              "url": "https://en.wikipedia.org/wiki/Dune_(novel)",
              "short_description": [
                "Dune is a 1965 science fiction novel by American author Frank Herbert"
              ],
              "plot_summary":[
                "In the far future, humanity has eschewed advanced computers in favor of adapting their minds to be capable of extremely complex tasks. access their Other Memory, the ego and experiences of their female ancestors."
              ]
            }
          },
          {
            "id": 2,
            "title": "Ender\"s Game",
            "author": "Orson Scott Card",
            "first_published": "1985",
            "pages": "324",
            "isbn": "0812550706",
            "image": "https://images.gr-assets.com/books/1408303130l/375802.jpg",
            "goodreads":{
              "url": "https://www.goodreads.com/book/show/375802.Ender_s_Game",
              "rating": "4.3",
              "ratings": 934006
            },
            "amazon":{
              "url": "https://www.amazon.com/Enders-Ender-Quintet-Orson-Scott/dp/0312853238",
              "rating": "4.5",
              "ratings": 9523
            },
            "wikipedia":{
              "url": "https://en.wikipedia.org/wiki/Ender%27s_Game",
              "short_description": [
                "Ender's Game is a 1985 military science fiction novel by American author Orson Scott Card."
              ],
              "plot_summary":[
                "In the future, humanity, having begun to explore the Universe and master interplanetary spaceflight, encounters an alien race dubbed the \"buggers\"."
              ]
            }
          },
          {
            "id": 3,
            "title": "2001: A Space Odyssey",
            "author": "Arthur C. Clarke",
            "first_published": "1968",
            "pages": "297",
            "isbn": "0451457994",
            "image": "https://images.gr-assets.com/books/1432468943l/70535.jpg",
            "goodreads":{
              "url": "https://www.goodreads.com/book/show/70535.2001",
              "rating": "4.13",
              "ratings": 194319
            },
            "amazon":{
              "url": "https://www.amazon.com/2001-Space-Odyssey-25th-Anniversary/dp/0451452739",
              "rating": "4.6",
              "ratings": 724
            },
            "wikipedia":{
              "url": "https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(novel)",
              "short_description": [
                "2001: A Space Odyssey is a 1968 science fiction novel by British writer Arthur C. Clarke."
              ],
              "plot_summary":[
                "In the background to the story in the book, an ancient and unseen alien race uses a device with the appearance of a large crystalline monolith"
              ]
            }
          }];
});

module.exports = api
