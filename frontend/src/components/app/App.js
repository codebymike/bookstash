import React, { Component } from 'react';
import Header from "../header/Header";
import Main from "../main/Main";
import Side from "../side/Side";
import Footer from "../footer/Footer";
import './App.css';

class App extends Component {

  state = {
    sort_order: "default",
    api_url: "https://b1w5pwo5bd.execute-api.eu-west-1.amazonaws.com/latest/books"
  }

  constructor(){
    super();
    this.setSortOrder = this.setSortOrder.bind(this);
  }

  async setSortOrder( order ){
    // alert( order );
    await this.setState({ sort_order: order });
    this.generateApiUrl();
  }

  generateApiUrl(){
    const sort_order = this.state.sort_order;
    const api_url = `https://b1w5pwo5bd.execute-api.eu-west-1.amazonaws.com/latest/books?sort=${ sort_order }`;
    this.setState({ api_url });
  }

  render() {
    return (
      <div className="bookstash">
        <Header />
        <Main url={ this.state.api_url } />
        <Side setSortOrder={ this.setSortOrder }/>
        <Footer />
      </div>
    )
  }
}

export default App;
