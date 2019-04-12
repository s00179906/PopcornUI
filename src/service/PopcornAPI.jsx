import React, { Component } from "react";
import axios from "axios";

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
      <div>
        <h1 className="text-success">Popcorn API Service</h1>
        <div>
          {data.length
            ? data.map(data => <div key={data._id}>{data.title}</div>)
            : null}
        </div>
      </div>
    );
  }
}

export default PopcornAPI;
