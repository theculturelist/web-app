import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import { map } from 'lodash'
import { Link } from 'react-router-dom'
import { hoursToday } from './utilities'
import VenueHeader from './VenueHeader'
import Tag from './Tag'
import CloudinaryImage from './CloudinaryImage'

class VenuePreview extends PureComponent {
  render() {
    return(
      <article className="venue-preview animated fadeIn flex ph2 pl3-l pv3 w-100 w-50-m w-third-l">
        <div className="b--light-silver ba bg-white br2 overflow-hidden w-100">
          <Link to={`/venues/${this.props.id}`} className="link dim">
            <CloudinaryImage
              className="b--light-gray bb pointer w-100"
              src={this.props.thumbnail}
              alt={this.props.name.full}
              transform={{quality: 'auto'}}
            />
            <VenueHeader
              name={this.props.name}
              size={'f3'}
             />
          </Link>
          <div className="pb2 ph2">
            <h3 className="f5 fw4 lh-copy mt0 mb1">
              <span className="b">Hours Today:</span> {hoursToday(this.props.hours)}
            </h3>
            <h3 className="f5 fw4 lh-copy mt0">
             {`${this.props.city}`}
             {this.props.distance ? ` (${this.props.distance} Miles Away)` : null}
            </h3>
            <div className="flex flex-wrap items-center">
              { map(Object.keys(this.props.tags), t => (<Tag key={t} name={t} />)) }
            </div>
          </div>
        </div>
      </article>
    )
  }
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
