import React, { Component } from 'react';
import axios from 'axios';

const divStyle = {
  color: 'white'
};

class TVShowInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tvShowIMDB: localStorage.getItem('tvShowsIMDB'),
      apiKey: 'e9754a45dd90648ec3f03ea6bf39b8e1',
      tvShowData: [],
      tvShowStream: []
    };
  }

  componentDidMount() {
    const { tvShowIMDB, apiKey } = this.state;
    axios
      .get(
        `https://api.odb.to/identity?imdb_id=${tvShowIMDB}&api_key=${apiKey}`
      )
      .then(res => {
        const data = res.data.results;
        for (let index = 0; index < data.length; index++) {
          var streamData = res.data.results[index].streamData;
        }
        this.setState({
          tvShowData: data,
          tvShowStream: streamData
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { tvShowData, tvShowStream } = this.state;
    console.log(`${tvShowData[0]}`, tvShowData);
    console.log(tvShowStream);
    return (
      <React.Fragment>
        <div style={divStyle}>
          {tvShowData.length ? (
            tvShowData.map(tvShows => (
              <div key={tvShows.id}>
                <h1>{tvShows.title}</h1>

                {tvShowStream.length
                  ? tvShowStream.map(streams => (
                      <div>
                        <a
                          href={
                            streams.openload != null
                              ? streams.openload.url
                              : null
                          }>
                          {streams.openload != null
                            ? `Episode ${streams.openload.Episode}`
                            : 'Openload stream link not found'}
                        </a>
                        {/* <a href={streams.streamango.url}>
                          {streams.streamango != null
                            ? streams.streamango.url
                            : " Streamango stream link not found"}
                        </a> */}
                      </div>
                    ))
                  : null}

                {/* <a href={tvShows.streamData[0].openload.url}>
                  Episode: {tvShows.streamData[0].openload.Episode}
                </a> */}
                {/* {streamData.length
                  ? streamData.map(streams => (
                      <div>{streams.streamango.url}</div>
                    ))
                  : "No streams found"} */}
              </div>
            ))
          ) : (
            <h1>Oops! No TV Shows here...</h1>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default TVShowInfo;
