import React, { Component } from "react";
import axios from "axios";
import Iframe from "react-iframe";
import "../styles/PopcornAPI.css";

class PopcornAPI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    // axios.get('https://tv-v2.api-fetch.website/movies/')
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

  render() {
    const { data } = this.state;
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            {data.length
              ? data.map(data => (
                  <div className="col-sm" key={data._id}>
                    <div className="movie-wrap">
                      <img
                        className="movie-images"
                        src={data.images.banner}
                      />
                      <h6 className="movie-title text-center text-uppercase">{data.title}</h6>
                    </div>
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
