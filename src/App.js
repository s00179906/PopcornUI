import React, { Component } from "react";
import "./App.css";
import PopcornAPI from "./service/PopcornAPI";
import { BrowserRouter, Route } from "react-router-dom";

import Movie from "./components/Movie";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Route path="/" exact render={() => <PopcornAPI />}/>
        <Route path="/movie" exact render={() => <Movie />}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
