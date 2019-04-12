import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PopcornAPI from './service/PopcornAPI'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PopcornAPI/>
      </div>
    );
  }
}

export default App;
