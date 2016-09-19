import React, { Component } from 'react';
import axios from 'axios';
import ReactSpinner from 'react-spinjs';
import animate from 'animate.css'; //eslint-disable-line
import tachyons from 'tachyons'; //eslint-disable-line
import Header from './Header';
import Venue from './VenuePreview';

const spinnerOpts = {
  lines: 11,
  length: 56,
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
        <div className="application">
          <Header />
          <section className="content-body pt5">
            {this.state.venues.map((venue) => (
              <Venue
                key={venue.id}
                name={venue.name}
                imageUrl={venue.media[0].widescreen}
                address={venue.address.formatted_address}
                distance={venue.location.lat}
              />
            ))}

          </section>
        </div>
      )
    }

    return (<ReactSpinner config={spinnerOpts}/>)
  }
}

export default App;
