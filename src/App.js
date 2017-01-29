import React, { Component } from 'react'
import { Router, Route, hashHistory } from 'react-router'
import PromisedLocation from 'promised-location'
import { map } from 'lodash'
import { metersAway, metersToMiles } from './utilities'
import Home from './Home'
import InitScreen from './InitScreen'
import Venue from './Venue'
import base from './config/Rebase'

class App extends Component {
  state = {
    venuesLoaded: false
  }

  componentDidMount() {
    this.getUserLocation().then(data => {
      if (sessionStorage.getItem('venues')) {
        this.setState({venuesLoaded: true })
      } else {
        base.fetch('venues', {
          context: this,
          asArray: true
        })
        .then(data => {
          const user_location = JSON.parse(sessionStorage.getItem('userLocation'))
          const venue_data = map(data, venue => {
            venue.distance = metersToMiles(metersAway(user_location, venue.location))
            return venue
          })

          sessionStorage.setItem('venues', JSON.stringify(venue_data))
          this.setState({venuesLoaded: true })
        })
        .catch(error => {
          console.log(error)
        })
      }
    })
  }

  getUserLocation = () => {
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
        .catch(err => {
          console.error('Position Error ', err.toString())
        })
    }

    return locator
  }

  render() {
    return (
      this.state.venuesLoaded ?
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
