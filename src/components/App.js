import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import PopcornAPI from "./PopcornAPI";
import Movie from "./Movie";
import Search from "./Search";
import Navbar from './Navbar'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Route path="/" exact render={() => <PopcornAPI />} />
          <Route path="/movie" render={() => <Movie />} />
          <Route path="/search" render={() => <Search/>} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;