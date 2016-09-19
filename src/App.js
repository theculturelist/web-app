import React, { Component } from 'react';
import axios from 'axios';
import animate from 'animate.css'; //eslint-disable-line
import tachyons from 'tachyons'; //eslint-disable-line
import Header from './Header';
import Venue from './VenuePreview';

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
    if (this.state.loading === false) {
      return (
        <div className="application">
          <Header />
          <section className="content-body">
            {this.state.venues.map((venue) => (
              <Venue
                key={venue.id}
                name={venue.name}
                imageUrl={venue.media[0].widescreen}
                address={venue.address.formatted_address}
                distance={venue.location.latitude}
              />
            ))}

          </section>
        </div>
      )
    }

    return (<h1>Loading</h1>)
  }
}

export default App;
