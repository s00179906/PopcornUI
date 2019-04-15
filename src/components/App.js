import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import PopcornAPI from './PopcornAPI';
import Movie from './Movie';
import Search from './Search';
import Navbar from './Navbar';
import GetTVShows from './GetTVShows';
import TVShowInfo from './TVShowInfo';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          {/* <Route render={() => <Navbar />} /> */}
          <Route path='/' exact render={() => <PopcornAPI />} />
          <Route path='/tvshows' render={() => <GetTVShows />} />
          <Route path='/tvshowsinfo' render={() => <TVShowInfo />} />
          <Route path='/movie' render={() => <Movie />} />
          <Route path='/search' render={() => <Search />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
