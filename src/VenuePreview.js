import React, { PropTypes as PT} from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import VenueHeader from './VenueHeader'
import CloudinaryImage from './CloudinaryImage';

const today = moment().format("dddd").toLowerCase();

const hoursToday = (hours, day) => {
  return hours.hasOwnProperty(day) ? hours[day] : null
}

const VenuePreview = (props) => {
  return (
    <Link to={`/venues/${props.id}`}>
      <article className="pv2 ph2 w-50-ns animated fadeIn fl">
        <div className="ba br2 b--light-silver shadow-1 dim bg-white">
          <VenueHeader name={props.name} />
          <CloudinaryImage
            className="w-100 pointer bt b--light-silver"
            src={props.thumbnail}
            alt={props.name}
            transform={{quality: 'auto'}}
          />
          <div className="ph2 pb1 dark-gray">
            <h3 className="f6 fw3 lh-copy mb1">{props.address}</h3>
            <h3 className="f6 fw3 lh-copy mt0">Hours Today: {hoursToday(props.hours, today)}</h3>
          </div>
        </div>
      </article>
    </Link>
  );
}

VenuePreview.propTypes = {
  address: PT.string.isRequired,
  distance: PT.string,
  hours: PT.object,
  id: PT.string.isRequired,
  name: PT.string.isRequired,
  thumbnail: PT.string,
};

VenuePreview.defaultProps = {
  address: '123 Street St, Los Angeles, CA 90001',
  distance: '5mi',
  id: '1234567890',
  name: 'Undefined Venue',
  thumbnail: `Placeholder-16x9_zpm4cq.jpg`,
};

export default VenuePreview;
