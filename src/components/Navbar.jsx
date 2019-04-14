import React, { Component } from "react";
import { Link } from "react-router-dom";
// import axios from 'axios'

class Navbar extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     searchTerm: "",
  //     clicked: false,
  //     apiKey: 'e9754a45dd90648ec3f03ea6bf39b8e1'
  //   };
  // }

  // handleClick = event => {
  //   this.setState({
  //     searchTerm: event.target.value,
  //     clicked: false
  //   });
  // };

  // method = event => {
  //   event.preventDefault();
  //   const { searchTerm, clicked } = this.state;
  //   localStorage.setItem("searchTerm", searchTerm);
  //   localStorage.setItem("clicked", clicked);
  //   console.log(clicked, searchTerm);

  //   axios(
  //     `https://api.odb.to/search?q=${searchTerm}&api_key=${this.state.apiKey}`
  //   )
  //     .then(res => {
  //       console.log(res);
  //       // this.setState({
  //       //   searchedMovieData: res.data,
  //       // });
  //     })
  //     .catch(error => {
  //       console.log("Error fetching data", error);
  //     });
  // };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to="/">
              Home
            </Link>

            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link className="nav-link" to="/search">
                  Search for a Movie
                </Link>
              </li>
            </ul>
            {/* <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search for movies..."
                aria-label="Search"
                value={this.state.searchTerm}
                onChange={this.handleClick}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                onClick={this.method}
              >
                Search
              </button>
            </form> */}
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
