import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/Movie.css';

class Movie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: [],
      movieImages: []
    };
  }

  componentDidMount() {
    const movieImdbData = localStorage.getItem('movieImdbID');
    axios
      .get(`https://tv-v2.api-fetch.website/movie/${movieImdbData}`)
      .then(res => {
        this.setState({ movie: res.data });
        this.setState({ movieImages: res.data.images });
        console.log('data', res);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { movie, movieImages } = this.state;
    const film = `http://vplus.ucoz.com/${movie.imdb_id}`;

    const movieName = this.state.movie.title;
    const imdbID = this.state.movie.imdb_id;
    const movieYear = this.state.movie.year;
    const movieEmbededURL = `https://api.odb.to/embed?imdb_id=${imdbID}&title=${movieName}&year=${movieYear}`;

    return (
      <React.Fragment>
        <div className='text-center item-container'>
          <img
            src={movieImages ? movieImages.fanart : null}
            alt='movie-fanart'
            className='movie-fanart'
          />

          <img
            src={movieImages ? movieImages.poster : null}
            alt='movie-poster'
            className='movie-poster'
          />

          <div className='movie-details'>
            <h1>{movie ? movie.title : 'No Movie Title'}</h1>

            <p>{movie ? movie.synopsis : 'No Movie Details'}</p>
            <h3>Movie Details: </h3>
            <p>{movie ? movie.runtime : '0'} minutes</p>
            <p>{movie ? 'Rated: ' + movie.certification : ''}</p>
            <p>{movie.year}</p>
            <a href={movie.trailer}>Watch Trailer</a>

            <p className='text-warning'>
              Please use the stream url link until i fix mixed-content issue If
              no movie details show up above. Please give the "Stream Movie"
              link ago because the movie might be there!
            </p>
            <p className='text-warning'>
              If you get "Movie added to upload queue". Its being uploaded the
              database. Please come back Later, thanks!"
            </p>
            <a href={film} className='stream-button'>
              Stream Movie Link 1
            </a>
            <a href={movieEmbededURL} className='stream-button'>
              Stream Movie Link 2
            </a>
          </div>
        </div>
        <div />

        {/* <iframe
          id="odbIframe"
          title="movie-title"
          src={movieEmbededURL}
          width="650"
          height="400"
          allowscriptaccess="always"
          allowfullscreen="true"
          scrolling="no"
          frameborder="0"
        />
        <iframe
          src="https://videospider.stream/getvideo?key=HWN3pfMVyjKxEe3c&video_id=tt0944947&tv=1&s=1&e=1&ticket=bhxp1kgl4oggeb5zxgs6aqzcsb0jhy"
          width="600"
          height="400"
          frameborder="0"
          allowfullscreen="true"
          scrolling="no"
        />
        <iframe
          src="https://videospider.stream/getvideo?key=HWN3pfMVyjKxEe3c&video_id=tt0944947&tv=1&s=1&e=2&ticket=bhxp1kgl4oggeb5zxgs6aqzcsb0jhy"
          width="600"
          height="400"
          frameborder="0"
          allowfullscreen="true"
          scrolling="no"
        />
        <iframe
          src="https://videospider.stream/getvideo?key=HWN3pfMVyjKxEe3c&video_id=tt0944947&tv=1&s=1&e=3&ticket=bhxp1kgl4oggeb5zxgs6aqzcsb0jhy"
          width="600"
          height="400"
          frameborder="0"
          allowfullscreen="true"
          scrolling="no"
        /> */}

        <Link to='/search'>
          <button type='button' className='btn btn-outline-warning m-4'>
            Back to Search
          </button>
        </Link>

        <Link to='/'>
          <button type='button' className='btn btn-outline-warning m-4'>
            Home
          </button>
        </Link>
      </React.Fragment>
    );
  }
}

export default Movie;
