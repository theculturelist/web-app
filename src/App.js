import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Venue from './Venue';
import InitScreen from './InitScreen';
import base from './config/Rebase';

const App = () => {
  const [venuesLoaded, loadVenues] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('venues')) {
      loadVenues(true);
    }

    base.fetch('venues', {
      context: this,
      asArray: true
    })
    .then(data => {
      sessionStorage.setItem('venues', JSON.stringify(data));

    })
    .then(() => loadVenues(true))
    .catch(error => {
      console.log(error)
    });

  }, []);

  return (
    venuesLoaded ?
      <Switch>
        <Route
          component={Home}
          exact
          path="/"
        />
        <Route
          component={Venue} 
          path="/venues/:id"
        />
      </Switch>
    : <InitScreen />
  )
};

export default App
