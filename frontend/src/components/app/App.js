import React, { Component } from 'react';
import Header from "../header/Header";
import Side from "../side/Side";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="bookstash">
        <Header />
        <Side />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App;
