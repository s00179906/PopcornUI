import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../styles/Global.css';

class GetTVShows extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tvShowsData: [],
      counter: 2
    };

    window.onscroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        this.loadMoreTVShows('https://tv-v2.api-fetch.website/shows/');
      }
    };
  }

  loadMoreTVShows = url => {
    const { counter } = this.state;
    const _url = `${url}+${counter}`;
    axios.get(_url).then(res => {
      console.log(res.data);
      this.setState({
        tvShowsData: this.state.tvShowsData.concat(res.data),
        counter: counter + 1
      });
    });
  };

  componentDidMount() {
    axios
      .get('https://tv-v2.api-fetch.website/shows/1')
      .then(res => {
        this.setState({
          tvShowsData: res.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleClick = (e, tvShowsData) => {
    const tvShowIMDB = tvShowsData.imdb_id;
    localStorage.setItem('tvShowsIMDB', tvShowIMDB);
  };

  render() {
    const { tvShowsData } = this.state;
    return (
      <React.Fragment>
        <div className='container-fluid mt-4 item-container'>
          <div className='row'>
            {tvShowsData.length ? (
              tvShowsData.map(tvshows => (
                <Link to='/tvshowsinfo' key={tvshows.imdb_id}>
                  <div
                    className='col-md col-sm-6 col-xs-6 p-0 my-2 '
                    onClick={e => this.handleClick(e, tvshows)}
                    key={tvshows.imdb_id}>
                    <div className='item-wrap my-2 item ml-3 '>
                      <img
                        className='item-images'
                        src={tvshows.images.poster}
                        alt='tv-poster'
                      />
                      <div className='text-bg' />
                      <h6 className='item-title text-center text-uppercase'>
                        {tvshows.title}
                      </h6>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <h1>No TV Shows found...</h1>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default GetTVShows;
