import React, { Component } from 'react';
import VenuePreview from './VenuePreview';

export default class VenueList extends Component {

  render() {
    const venues = this.props.venues
    const venueIds = Object.keys(venues)

    return (
      <div>
        <section className="pt5">
          {venueIds.map((name) => (
            <VenuePreview
              {...venues[name]}
              address={venues[name].address.formatted_address}
              key={name}
              thumbnail={venues[name].media && venues[name].media.widescreen}
            />
          ))}
        </section>
      </div>
    );
  }
}
