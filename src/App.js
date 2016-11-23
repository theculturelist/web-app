import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import MainLayout from './Header';
import Home from './Home';
import Venue from './Venue';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route component={MainLayout}>
          <Route path="/" component={Home} />
          <Route path="/venues/:id" component={Venue} />
        </Route>
      </Router>
    );
  }
}

export default App;
