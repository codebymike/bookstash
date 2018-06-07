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
    api_url: "https://b1w5pwo5bd.execute-api.eu-west-1.amazonaws.com/latest/books",
    year: {
      label: "year",
      min: 1932,
      max: 2011,
      step: 1,
      value: { min: 1932, max: 2011 }
    }
  }

  setSortOrder = async ( order ) => {
    // alert( order );
    await this.setState({ sort_order: order });
    this.generateApiUrl();
  }

  setFilterValue = async ( data ) => {
    await this.setState({
      year: {
        ...this.state.year,
        value: data.value
      }
    });
    this.generateApiUrl();
  }


  generateApiUrl = () => {
    const sort_order = this.state.sort_order;
    const year = this.state.year;
    const api_url = `https://b1w5pwo5bd.execute-api.eu-west-1.amazonaws.com/latest/books?sort=${ sort_order }&year.min=${ year.value.min }&year.max=${ year.value.max }`;
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
                  <BooksNavigation year={this.state.year} setFilterValue={ this.setFilterValue } setSortOrder={ this.setSortOrder }/>
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
