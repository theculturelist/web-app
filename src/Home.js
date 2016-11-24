import React, { Component } from 'react';
// import ReactSpinner from 'react-spinjs';
import VenueList from './VenueList';
import Base from './Base';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { venues: {} };
  }

  componentWillMount() {
    this.ref = Base.syncState('venues', { context: this, state: 'venues'})
  }

  componentWillUnmount() {
    Base.removeBinding(this.ref)
  }

  render() {
    return <VenueList venues={this.state.venues} />
  }
}