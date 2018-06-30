import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NextCoin from './NextCoin';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to NextCoin</h1>
        </header>
        <NextCoin />
      </div>
    );
  }
}

export default App;
