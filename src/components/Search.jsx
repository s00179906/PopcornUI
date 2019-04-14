import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Search.css";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiKey: "e9754a45dd90648ec3f03ea6bf39b8e1",
      searchTerm: "",
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
    if (searchTerm != "") {
      console.log("Search Term:", searchTerm);
      axios(
        // `https://api.odb.to/search?q=${searchTerm}&api_key=${this.state.apiKey}`
        // `https://api.odb.to/alphabet?letter=${searchTerm}&api_key=${apiKey}`
        `http://www.omdbapi.com/?apikey=281cb509&s=${searchTerm}`
      )
        .then(res => {
          const data = res.data.Search;
          this.setState({
            searchedMovieData: data
          });
          console.log(this.state.searchedMovieData);

          localStorage.setItem(
            "movieImdbID",
            this.state.searchedMovieData.imdbID
          );
          const id = localStorage.getItem();
          console.log(id);
        })
        .catch(error => {
          console.log("Error fetching data", error);
        });
    }
  };

  handleClick = (e, data) => {
    const movieImdbID = data.imdbID;
    localStorage.setItem("movieImdbID", movieImdbID);
  };

  render() {
    const { searchedMovieData } = this.state;
    return (
      <React.Fragment>
        <div>
          <h1 className="text-center text-info">
            Search for a movie. TV-Shows coming soon!
          </h1>
          <div className="search-container">
            <input
              type="text"
              className="search-bar"
              placeholder="Search for a movie"
              value={this.state.searchTerm}
              onChange={this.handleChange}
            />
            <button
              type="button"
              onClick={this.searchMovies}
              class="btn btn-outline-warning m-4"
            >
              Search
            </button>
          </div>
        </div>

        <div className="container-fluid ml-2">
          <div className="row">
            {searchedMovieData.length
              ? searchedMovieData.map(data => (
                  <div className="col-md col-sm-6 col-xs-6 p-0 my-2">
                    <Link to="/movie" key={data.imdbID}>
                      <div class="movie-wrap my-4">
                        <img
                          className="movie-images"
                          key={data.Title}
                          src={data.Poster}
                          alt="movie"
                          onClick={e => this.handleClick(e, data)}
                        />
                        <h6 className="movie-title" key={data.imdbID}>
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
