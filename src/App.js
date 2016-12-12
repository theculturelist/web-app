import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import ReactSpinner from 'react-spinjs';
import Navigation from './Layouts/Navigation';
import Home from './Home';
import Venue from './Venue';
import base from './Base';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venuesLoaded: false,
    }
  }

  componentDidMount() {
    if (sessionStorage.getItem('venues')) {
      this.setState({venuesLoaded: true });
    } else {
      base.fetch('venues', {
        context: this,
        asArray: true
      }).then(data => {
        sessionStorage.setItem('venues', JSON.stringify(data));
        this.setState({venuesLoaded: true });
      }).catch(error => {
        console.log(error);
      })
    }
  }

  render() {
    return (
      this.state.venuesLoaded ?
        <Router history={hashHistory}>
          <Route component={Navigation}>
            <Route path="/" component={Home} />
            <Route path="/venues/:id" component={Venue} />
          </Route>
        </Router>
      : <ReactSpinner />
    )
  }
}

export default App;
