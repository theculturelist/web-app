import React, { PropTypes as PT } from 'react';
import VenuePreview from './VenuePreview';

const VenueList = (props) => (
  <section className="venue-list flex flex-wrap pt5">
    {props.venues.map(venue => (
      <VenuePreview
        city={venue.address.city}
        hours={venue.hours}
        id={venue.key}
        location={venue.location}
        key={venue.key}
        name={venue.name}
        userLocation={props.userLocation}
        tags={venue.tags}
        thumbnail={venue.media && venue.media.widescreen}
      />
    ))}
  </section>
);

VenueList.propTypes = {
  venues: PT.arrayOf(PT.object).isRequired,
  userLocation: PT.any,
};

export default VenueList;
