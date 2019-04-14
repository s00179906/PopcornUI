import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Movie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      torrents: [],
      movie: []
    };
  }

  componentDidMount() {
    const movieImdbData = localStorage.getItem("movieImdbID");
    axios
      .get(`https://tv-v2.api-fetch.website/movie/${movieImdbData}`)
      .then(res => {
        console.log(res);
        this.setState({ movie: res.data });
        this.setState({ torrents: res.data.torrents.en["1080p"] });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { movie } = this.state;
    const film = `http://vplus.ucoz.com/${movie.imdb_id}`;
    console.log(movie.images);

    return (
      <React.Fragment>
        <Link to="/">
            <button type="button" class="btn btn-outline-warning m-4">
              Go Back
            </button>
        </Link>

        <div className="container-fluid text-info text-center">
          <h2>{movie.title}</h2>
          <p>{movie.synopsis}</p>
          {/* <img src={movie.images.banner} alt="movie"/> */}
          <p>{movie.runtime} minutes</p>
          <p>{movie.certification}</p>
          <p>{movie.year}</p>
          <a href={movie.trailer}>Watch Trailer</a>

          <p className="text-warning">
            Please use the stream url link until i fix mixed-content issue If no
            movie details show up above. Please give the "Stream Movie" link ago
            because the movie might be there!
          </p>
          <p className="text-warning">
            If you get "Movie added to upload queue". Its being uploaded the
            database. Please come back Later, thanks!"
          </p>
          <a href={film}>Stream Movie</a>
        </div>
        <div />
      </React.Fragment>
    );
  }
}

export default Movie;
