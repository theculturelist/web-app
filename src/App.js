import React, { Component } from 'react';
import axios from 'axios';
import ReactSpinner from 'react-spinjs';
import Header from './Header';
import VenuePreview from './VenuePreview';

const spinnerOpts = {
  lines: 13,
  length: 45,
  width: 10,
  radius: 48,
  corners: 1,
  color: '#000',
  opacity: 0.25,
  rotate: 0,
  direction: 1,
  speed: 1,
  trail: 60 ,
  fps: 20,
  zIndex: 2e9,
  top: '30%',
  left: '50%',
  shadow: false,
  hwaccel: true,
  position: 'absolute'
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { appLoading: true, venues: [] }
  }

  componentDidMount() {
    axios.get('http://api-staging.theculturelist.org/v1/venues')
      .then((response) => {
        this.setState({ appLoading: false, venues: response.data});
      })
      .catch((error) => {
        console.log(error);
    });
  }

  render() {
    if (this.state.appLoading === false) {
      return (
        <div>
          <Header />
          <section className="pt5 mh2">
            {this.state.venues.map((venue) => (
              <VenuePreview
                key={venue.id}
                name={venue.name}
                imageUrl={venue.media[0].widescreen}
                address={venue.address.formatted_address}
                location={venue.location}
              />
            ))}
          </section>
        </div>
      );
    }

    return (
      <div className="loading-app">
        <Header />
        <ReactSpinner config={spinnerOpts}/>
      </div>
    );
  }
}

export default App;
