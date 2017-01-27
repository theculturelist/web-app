import React, { PropTypes } from 'react';
import VenuePreview from './VenuePreview';

const VenueList = (props) => (
  <div className="venue-list flex flex-wrap pt5">
    {props.venues.map(venue => (
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
);

VenueList.propTypes = {
  venues: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default VenueList;
