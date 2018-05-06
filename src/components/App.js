import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Venue from './Venue'
import InitScreen from './InitScreen'
import base from '../config/Rebase'

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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/venues/:id" component={Venue} />
        </Switch>
      : <InitScreen />
    )
  }
}

export default App
