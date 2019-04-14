import React, { Component } from "react";
import PopcornAPI from "./PopcornAPI";
import { BrowserRouter, Route } from "react-router-dom";

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
          <Route path="/movie" exact render={() => <Movie />} />
          <Route path="/search" render={() => <Search/>} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
