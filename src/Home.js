import React, { Component } from 'react';
import ReactSpinner from 'react-spinjs';
import VenueList from './VenueList';
import base from './Base';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { venues: false };
  }

  componentWillMount() {
    base.fetch('venues', {
      context: this,
    }).then(data => {
      this.setState({venues: data});
    }).catch(error => {
      //handle error
    })
  }

  render() {
    return this.state.venues ? <VenueList venues={this.state.venues} /> : <ReactSpinner />
  }
}
