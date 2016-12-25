import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Home from './Home';
import InitScreen from './InitScreen';
import Venue from './Venue';
import base from './Base';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venuesLoaded: false,
      locationLoaded: false,
    }

    this.getUserLocation = this.getUserLocation.bind(this)
  }

  componentDidMount() {
    this.getUserLocation()

    if (sessionStorage.getItem('venues')) {
      this.setState({venuesLoaded: true });
    } else {
      base.fetch('venues', {
        context: this,
        asArray: true
      })
      .then(data => {
        sessionStorage.setItem('venues', JSON.stringify(data));
        this.setState({venuesLoaded: true });
      })
      .catch(error => {
        console.log(error);
      })
    }
  }

  getUserLocation() {
    if (navigator.geolocation && !sessionStorage.getItem('userLocation')) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const location = { latitude: pos.coords.latitude, longitude: pos.coords.longitude }
        sessionStorage.setItem('userLocation', JSON.stringify(location))
        this.setState({ locationLoaded: true })
      })
    } else if (sessionStorage.getItem('userLocation')) {
      this.setState({ locationLoaded: true })
    }
  }


  render() {
    return (
      this.state.venuesLoaded && this.state.locationLoaded ?
        <Router history={hashHistory}>
          <Route>
            <Route path="/" component={Home} />
            <Route path="/venues/:id" component={Venue} />
          </Route>
        </Router>
      : <InitScreen />
    )
  }
}

export default App;
