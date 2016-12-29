import React, { PropTypes as PT} from 'react'
import { Link } from 'react-router'
import geolib from 'geolib'
import hoursToday from './utilities'
import VenueHeader from './VenueHeader'
import Tag from './Tag'
import CloudinaryImage from './CloudinaryImage'

const metersAway = (userLoc, venueLoc) => {
  //FIXME: Fix the data on our end to return latitude and longitude
  const fixedLoc = { latitude: venueLoc.lat, longitude: venueLoc.lng }
  return geolib.getDistanceSimple(userLoc, fixedLoc)
}

const metersToMiles = (meters) => (  (meters * 0.000621371192).toFixed(2) )

const VenuePreview = (props) => (
  <article className="venue-preview animated fadeIn ph2 pl3-l pv3 w-100 w-50-m w-third-l">
    <div className="b--light-silver ba bg-white br2 overflow-hidden">
      <Link to={`/venues/${props.id}`} className="link">
        <CloudinaryImage
          className="b--light-gray bb dim pointer w-100"
          src={props.thumbnail}
          alt={props.name}
          transform={{quality: 'auto'}}
        />
        <VenueHeader name={props.name} />
      </Link>
      <div className="pb3 ph2">
        <h2 className="f5 fw4 lh-copy mb1">
          {props.address}
        </h2>
        <h3 className="f5 fw4 lh-copy mt0 mb1">
          <span className="b">Hours Today:</span> {hoursToday(props.hours)}
        </h3>
        <h3 className="f5 fw4 i lh-copy mt0">
         {props.userLocation ?
           `${metersToMiles(metersAway(props.userLocation, props.location))} Miles Away`
           : 'Loading Distance...'}
        </h3>
        <div className="flex flex-wrap items-center">
          {props.tags.map(t => (<Tag key={t} name={t} />))}
        </div>
      </div>
    </div>
  </article>
)

VenuePreview.propTypes = {
  address: PT.string.isRequired,
  hours: PT.object.isRequired,
  id: PT.string.isRequired,
  location: PT.object,
  name: PT.string.isRequired,
  tags: PT.array,
  thumbnail: PT.string.isRequired,
  userLocation: PT.any,
}

VenuePreview.defaultProps = {
  address: '123 Street St, Los Angeles, CA 90001',
  id: '1234567890',
  name: 'Undefined Venue',
  thumbnail: `Placeholder-16x9_zpm4cq.jpg`,
}

export default VenuePreview
