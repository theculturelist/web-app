import React, { Component } from 'react'
import { Router, Route, hashHistory } from 'react-router'
import PromisedLocation from 'promised-location'
import Home from './Home'
import InitScreen from './InitScreen'
import Venue from './Venue'
import base from './Base'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      venuesLoaded: false,
      locationLoaded: false,
    }

    this.getUserLocation = this.getUserLocation.bind(this)
  }

  componentDidMount() {
    this.getUserLocation()

    if (sessionStorage.getItem('venues')) {
      this.setState({venuesLoaded: true })
    } else {
      base.fetch('venues', {
        context: this,
        asArray: true
      })
      .then(data => {
        sessionStorage.setItem('venues', JSON.stringify(data))
        this.setState({venuesLoaded: true })
      })
      .catch(error => {
        console.log(error)
      })
    }
  }

  getUserLocation() {
    const locator = new PromisedLocation()
    if (!sessionStorage.getItem('userLocation')) {
      locator
        .then(position => {
          const location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }
          sessionStorage.setItem('userLocation', JSON.stringify(location))
        })
        .then(() => {
          this.setState({locationLoaded: true })
        })
        .catch(err => {
          console.error('Position Error ', err.toString())
          this.setState({locationLoaded: true })
        })
    } else {
      this.setState({locationLoaded: true })
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

export default App
