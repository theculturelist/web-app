import React, { PropTypes as PT} from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import image from 'cloudinary';
import config from './config';

image.config(
  {
    cloud_name: config.cloudinary.cloud,
    api_key: config.cloudinary.api,
    api_secret: config.cloudinary.secret,
  }
)

const today = moment().format("dddd").toLowerCase();

const hoursToday = (hours, day) => {
  return hours.hasOwnProperty(day) ? hours[day] : null
}

const specialHours = (hours) => (hours ? <small className="lh-copy">Special Hours: {hours}</small> : null)

const VenuePreview = (props) => {
  return (
    <Link to={`/venues/${props.id}`}>
      <article className="pa1 pa2-ns fl w-100-s w-50-m w-third-l animated fadeIn">
        <div className="ba br2 b--gray">
          <header className="ph3">
             <h2 className="f5 f4-ns fw5 lh-title tracked-tight ttu blue">{props.name}</h2>
          </header>
          <img
            className="w-100 pointer dim bt b--gray"
            src={image.url(props.thumbnail, {quality: 'auto'})}
            alt={props.name}
          />
          <div className="ph2 pb3 dark-gray">
            <h3 className="f6 fw3 lh-copy">{props.address}</h3>
            <h3 className="f6 fw3 lh-copy">Hours Today: {hoursToday(props.hours, today)}</h3>
            {specialHours(props.hours.closed_on)}
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
