import React, { Component } from 'react'
import { Router, Route, hashHistory } from 'react-router'
import Home from './Home'
import InitScreen from './InitScreen'
import Venue from './Venue'
import base from './config/Rebase'

class App extends Component {
  state = {
    venuesLoaded: false
  }

  componentDidMount() {
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
