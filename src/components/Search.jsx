import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/Search.css';
import '../styles/Global.css';
import { MDBInput, MDBBtn, MDBIcon } from 'mdbreact';

class Search extends Component {
  constructor(props) {
    super(props);
    localStorage.setItem('movieImdbID', '');
    localStorage.setItem('tvShowsIMDB', '');
    localStorage.setItem('type', '');
    this.state = {
      apiKey: 'e9754a45dd90648ec3f03ea6bf39b8e1',
      searchTerm: '',
      searchedMovieData: []
    };
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({
      searchTerm: event.target.value
    });
  };

  searchMovies = () => {
    const { searchTerm } = this.state;
    if (searchTerm !== '') {
      axios(`https://www.omdbapi.com/?apikey=281cb509&s=${searchTerm}`)
        .then(res => {
          const data = res.data.Search;
          this.setState({
            searchedMovieData: data
          });
          console.log(this.state.searchedMovieData);
        })
        .catch(error => {
          console.log('Error fetching data', error);
        });
    }
  };

  handleClick = (e, data) => {
    const movieImdbID = data.imdbID;
    localStorage.setItem('movieImdbID', movieImdbID);

    const tvIMDB = data.Type === 'series' ? data.imdbID : '';
    localStorage.setItem('tvShowsIMDB', tvIMDB);

    // const whatIsIt = data.Type === 'movie' ? 'movie' : 'tvshow';
    // localStorage.setItem('type', whatIsIt);
    // console.log('What is it: ', whatIsIt);
  };

  render() {
    const { searchedMovieData } = this.state;

    return (
      <React.Fragment>
        <div className='container item-container'>
          <div className='form-group mt-4'>
            <h1 className='text-white text-center font-weight-bold'>
              Find a movie or TV show
            </h1>
            <MDBInput
              label='Search'
              outline
              size='lg'
              color='text-white'
              value={this.state.searchTerm}
              onChange={this.handleChange}
            />
            <MDBBtn
              className='btn btn-block'
              type='button'
              color='info'
              onClick={this.searchMovies}>
              <MDBIcon icon='search' className='mr-1' /> Search
            </MDBBtn>
          </div>
        </div>

        <div className='container-fluid ml-2'>
          <div className='row'>
            {searchedMovieData
              ? searchedMovieData.map(data => (
                  <div className='col-md col-sm-6 col-xs-6 p-0 my-2'>
                    <Link
                      to={data.Type === 'movie' ? '/movie' : '/tvshowsinfo'}
                      key={data.imdbID}>
                      <div className='item-wrap my-2 item' item>
                        <img
                          className='item-images'
                          key={data.Title}
                          src={data.Poster}
                          alt='movie'
                          onClick={e => this.handleClick(e, data)}
                        />
                        <h6 className='item-title' key={data.imdbID}>
                          {data.Title}
                        </h6>
                      </div>
                    </Link>
                  </div>
                ))
              : null}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Search;
