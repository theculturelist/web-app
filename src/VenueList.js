import React, { PureComponent, PropTypes } from 'react';
import VenuePreview from './VenuePreview';

class VenueList extends PureComponent {
  render() {
    return (
      <div className="venue-list flex flex-wrap mt1">
        {this.props.venues.map(venue => (
          <VenuePreview
            city={venue.address.city}
            hours={venue.hours}
            id={venue.key}
            location={venue.location}
            key={venue.key}
            name={venue.name}
            distance={venue.distance}
            tags={venue.tags}
            thumbnail={venue.media && venue.media.widescreen}
          />
        ))}
      </div>
    )
  }
}

VenueList.propTypes = {
  venues: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default VenueList;
