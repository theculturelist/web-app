import React, { Component } from 'react';
import VenuePreview from './VenuePreview';

export default class VenueList extends Component {

  render() {
    const venues = this.props.venues
    const venueIds = Object.keys(venues)

    return (
      <div>
        <section className="pt5 flex flex-wrap">
          {venueIds.map((name, index) => (
            <VenuePreview
              abbreviation={venues[name].abbreviation}
              address={venues[name].address.formatted_address}
              hours={venues[name].hours}
              id={name}
              key={name}
              name={venues[name].name}
              tags={venues[name].tags}
              thumbnail={venues[name].media && venues[name].media.widescreen}
            />
          ))}
        </section>
      </div>
    );
  }
}
