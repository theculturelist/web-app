import React, { Component } from 'react';
import axios from 'axios';

export default class Venue extends Component {
  constructor(props) {
    super(props);
    this.state = { venue: null };
  }

  componentDidMount() {
    axios.get(`http://api-staging.theculturelist.org/v1/venues/${this.props.params.id}`)
      .then((response) => {
        this.setState({ venue: response.data });
      })
      .catch((error) => {
        console.log(error);
    });
  }

  render() {
    return (
      <article className="pa3 fl w-100-s w-50-m w-third-l animated fadeIn">
        <h1>derp</h1>
      </article>
    );
  }
}
