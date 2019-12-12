import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import { Link } from 'react-router-dom';
import { hoursToday } from './utilities';
import VenueHeader from './VenueHeader';
import Tag from '@mandala-ui/tag';
import CloudinaryImage from './CloudinaryImage';

const VenuePreview = (props) =>{
    return(
    <article className="venue-preview animated fadeIn flex ph2 pl3-l pv3 w-100 w-50-m w-third-l">
      <div className="b--light-silver ba bg-white br2 overflow-hidden w-100">
          <CloudinaryImage
            className="b--light-gray bb pointer w-100"
            src={props.thumbnail}
            alt={props.name.full}
            transform={{quality: 'auto'}}
          />
          <Link to={`/venues/${props.id}`} className="link dim">
          <VenueHeader
            name={props.name}
            size={'f3'}
           />
        </Link>
        <div className="pb2 ph2">
          <h3 className="f5 fw4 lh-copy mt0 mb1">
            <span className="b">Hours Today:</span> {hoursToday(props.hours)}
          </h3>
          <h3 className="f5 fw4 lh-copy mt0">
           {`${props.city}`}
           {props.distance ? ` (${props.distance} Miles Away)` : null}
          </h3>
          <div className="flex flex-wrap">
            { props.tags ?
              map(Object.keys(props.tags), tag => (
                <div className="ma1">
                  <Tag
                    pill
                    key={tag}
                    color="blue"
                  >
                    <i className={`icon-${tag.toLowerCase()}`} /> {tag}
                  </Tag>
                </div>
              ))
              : null
            }
          </div>
        </div>
      </div>
    </article>
  )
}

VenuePreview.propTypes = {
  city: PropTypes.string,
  hours: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  location: PropTypes.object,
  name: PropTypes.object.isRequired,
  tags: PropTypes.object,
  thumbnail: PropTypes.string.isRequired,
  distance: PropTypes.string,
}

VenuePreview.defaultProps = {
  address: '123 Street St, Los Angeles, CA 90001',
  id: '1234567890',
  name: 'Undefined Venue',
  thumbnail: `Placeholder-16x9_zpm4cq.jpg`,
}


export default VenuePreview
