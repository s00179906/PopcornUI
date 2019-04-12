import React, { Component } from "react";
import axios from "axios";
import Iframe from "react-iframe";

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
        <h1 className="text-success">Popcorn API Service</h1>
        <div>
          {data.length? data.map(data => <img src={data.images.banner} />) : null}
        </div>
      </React.Fragment>
    );
  }
}

export default PopcornAPI;
