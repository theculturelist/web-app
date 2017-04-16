import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import VenuePreview from './VenuePreview';
import { forceCheck } from 'react-lazyload';

class VenueList extends PureComponent {
  componentDidUpdate() {
    forceCheck();
  }

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
