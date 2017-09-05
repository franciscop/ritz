import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from './Nav';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav>Hello Ritz</Nav>
        <Main />
      </div>
    );
  }
}

export default App;
