import React, { Component } from "react";
import axios from "axios";

class Movie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: [],
      //object below made to check for correct syntax for accessing a object with a numeric value as its key attribute
      test: {
        en: {
          "1080p": {
            url: "sad"
          }
        }
      }
    };
  } 

  componentDidMount() {
    const movieImdbData = localStorage.getItem("movieImdbID");
    axios
      .get(`https://tv-v2.api-fetch.website/movie/${movieImdbData}`)
      .then(res => {
        console.log(res);
        this.setState({ movie: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { movie } = this.state;
    //code below throws error > 
    // console.log(movie.torrents[en])
    return (
      <React.Fragment>
        <div className="container-fluid text-info text-center">
          <h2>{movie.title}</h2>
          <p>{movie.synopsis}</p>
          {/* <img src={movie.images.banner} alt="movie"/> */}
          <p>{movie.runtime} minutes</p>
          <p>{movie.certification}</p>
          <p>{movie.year}</p>
          <a href={movie.trailer}>Watch Trailer</a>

          <div>{movie.trailer}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movie;
