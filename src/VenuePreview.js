import React, { PropTypes as PT} from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import VenueHeader from './VenueHeader';
import Tag from './Tag';
import CloudinaryImage from './CloudinaryImage';

const today = moment().format("dddd").toLowerCase();

const hoursToday = (hours, day) => {
  return hours.hasOwnProperty(day) ? hours[day] : null
}

const VenuePreview = (props) => {
  return (
    <article className="w-100 w-50-ns mt0 pt0 pb1 ph2 animated fadeIn">
      <div className="br2 b--light-gray shadow-1 bg-white">
        <VenueHeader name={props.name} />
        <Link to={`/venues/${props.id}`}>
          <CloudinaryImage
            className="w-100 pointer dim bt bb b--light-gray"
            src={props.thumbnail}
            alt={props.name}
            transform={{quality: 'auto'}}
          />
        </Link>
        <div className="ph3 pb3">
          <h3 className="f5 fw4 lh-copy mb1">{props.address}</h3>
          <h3 className="f5 fw4 lh-copy mt0">Hours Today: {hoursToday(props.hours, today)}</h3>
          <div className="flex flex-wrap items-center">
            {props.tags.map(tag => (<Tag key={tag} name={tag} />))}
          </div>
        </div>
      </div>
    </article>
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
