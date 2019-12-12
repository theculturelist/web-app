import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import concat from 'lodash/concat'
import map from 'lodash/map'
import base from './config/Rebase'
import CloudinaryImage from './CloudinaryImage'

const RelatedVenues = (props) => {
  const [relatedVenues, setRelatedVenues] = useState([])

  useEffect(() => {
    map(Object.keys(props.venues), venue => {
      base.fetch(`venues/${venue}`, {
        context: this,
      })
      .then(data => {
        setRelatedVenues(concat(relatedVenues, data));
      })
      .catch(error => {
        console.log(error)
      })
    })
  }, [props.venues, relatedVenues])


  return (
    <section className="related-venues animated fadeIn">
      <h4 className="fw4 lh-copy mb1 underline">
        You Might Also Like:
      </h4>
      <ul className="list pl0">
        { map(relatedVenues, venue => (
          <li
            className="flex items-center lh-copy ph0 pv2 bb b--black-10"
            key={Math.random()}
            >
            <CloudinaryImage
              alt={`${venue.name.full}`}
              className='w2 h2 w3-ns h3-ns br-100'
              src={venue.media.thumbnail}
              transform={{quality: 'auto'}}
            />
            <div className="pl3 flex-auto">
              <span className="f6 db black-70">
                <Link to={`/venues/${venue.id}`} className="link blue dim">{venue.name.proper} {venue.name.full}</Link>
              </span>
              <span className="f6 db black-70">
                {venue.address.city}, {venue.address.state_short}
              </span>
            </div>
          </li>
        )) }
      </ul>
    </section>
  )
}

export default RelatedVenues
