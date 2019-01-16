import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import EnterNumbers from './components/EnterNumbers.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br/>
        <EnterNumbers />
      </div>
    );
  }
}

export default App;
