import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import Main from "./Main/Main";
import BooksNavigation from "./BooksNavigation/BooksNavigation";
import Book from "./Book/Book";
import BookNavigation from './BookNavigation/BookNavigation';
import Footer from "./Footer/Footer";
import NotFound from "./NotFound/NotFound";
import './App.css';

class App extends Component {

  state = {
    sort_order: "default",
    api_url: "https://b1w5pwo5bd.execute-api.eu-west-1.amazonaws.com/latest/books"
  }

  setSortOrder = async ( order ) => {
    // alert( order );
    await this.setState({ sort_order: order });
    this.generateApiUrl();
  }


  generateApiUrl = () => {
    const sort_order = this.state.sort_order;
    const api_url = `https://b1w5pwo5bd.execute-api.eu-west-1.amazonaws.com/latest/books?sort=${ sort_order }`;
    this.setState({ api_url });
  }

  render = () => {
    return (
      <BrowserRouter>
        <div className="bookstash">
          <Header />
          <Switch>
            <Route exact path='/' render={ () => (
                <div className="group">
                  <Main url={ this.state.api_url } />
                  <BooksNavigation setSortOrder={ this.setSortOrder }/>
                </div>
              ) }/>
            <Route path="/:author/:book_title/:book_id" render={ routeProps => (
                <div className="group">
                  <Book {...routeProps} />
                  <BookNavigation />
                </div>
              )} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
