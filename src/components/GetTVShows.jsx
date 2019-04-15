import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../styles/GetTVShows.css";

class GetTVShows extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tvShowsData: []
    };
  }

  componentDidMount() {
    axios
      .get("https://tv-v2.api-fetch.website/shows/1")
      .then(res => {
        console.log(res);
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
    localStorage.setItem("tvShowsIMDB", tvShowIMDB);
  };

  render() {
    const { tvShowsData } = this.state;
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            {tvShowsData.length ? (
              tvShowsData.map(tvshows => (
                <Link to="/tvshowsinfo" key={tvshows.imdb_id}>
                  <div className="tvShow-wrap my-2">
                    <div
                      className="col-md col-sm-6 col-xs-6 p-0 my-2"
                      onClick={e => this.handleClick(e, tvshows)}
                      key={tvshows.imdb_id}
                    >
                      <img
                        className="tvShow-images ml-3 mt-2"
                        src={tvshows.images.poster}
                      />
                      <h6 className="tvShow-title text-center text-uppercase ml-3">
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
