import React, { Component } from "react";
import axios from "axios";
import "../styles/PopcornAPI.css";
import { Link } from "react-router-dom";

class PopcornAPI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      movieID: ""
    };
  }

  componentDidMount() {
    axios
      .get("https://tv-v2.api-fetch.website/movies/1")
      .then(res => {
        console.log(res);
        this.setState({ data: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleClick = (e, data) => {
    const movieImdbID = data.imdb_id;
    localStorage.setItem('movieImdbID', movieImdbID)
  };

  render() {
    const { data } = this.state;
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            {data.length
              ? data.map(data => (
                  <div
                    className="col-sm p-0 my-2"
                    key={data._id}
                    onClick={e => this.handleClick(e, data)}
                  >
                    <Link to="/movie">
                      <div className="movie-wrap my-2">
                        <img
                          className="movie-images"
                          src={data.images.banner}
                          alt="movie"
                        />
                        <h6 className="movie-title text-center text-uppercase">
                          {data.title}
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

export default PopcornAPI;
