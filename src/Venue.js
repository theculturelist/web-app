import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import NavBar from './NavBar'
import VenueHeader from './VenueHeader'
import HoursList from './HoursList'
import RelatedVenues from './RelatedVenues'
import EventList from './EventList'
import base from './config/Rebase'
import CloudinaryImage from './CloudinaryImage'

const Venue = (props) => {
  const [venueData, loadVenueData] = useState(false);
  const [venueLoaded, setVenueLoaded] = useState(false);

  useEffect(() => {
    base.fetch(`venues/${props.match.params.id}`, { context: this })
    .then(data => {
      loadVenueData(data)
    })
    .then(() => {
      setVenueLoaded(true)
    })
  }, [props.match.params.id]);

  return (
    venueLoaded ?
      <article
        className="animated fadeIn"
        style={{
        background:
        `url(https://res.cloudinary.com/theculturelist/image/upload/e_blur:200/q_auto/${venueData.media.widescreen}) no-repeat center center fixed`,
        backgroundSize: 'cover'}}
      >
        <Helmet>
          <meta
            property="og:url"
            content={`/venues/${venueData.id}`}
          />
          <meta
            property="og:type"
            content="place"
          />
          <meta
            property="og:title"
            content={venueData.name}
          />
          <meta
            property="og:description"
            content={venueData.description}
          />
          <meta
            property="og:image"
            content={venueData.media.widescreen}
          />
        </Helmet>
        <NavBar />

        <div className="pt0 pt6-ns">
          <CloudinaryImage
            alt='Venue Main Image'
            className='dn-ns w-100 mb0 pb0'
            src={venueData.media.widescreen}
            style={{ paddingTop: "6rem"}}
            transform={{quality: 'auto'}}
          />


            <div className="bg-near-white br2-ns center dark-gray pt2 ph2 ph5-l pb5 w-100 w-80-ns shadow-2">
              <VenueHeader name={venueData.name} size={'f3 f2-l'} />
              <hr />
              <div className="flex flex-wrap">

                <section className="w-100 order-0-ns order-last w-50-ns">
                  <CloudinaryImage
                    aspectRatio='thumbnail'
                    alt='Venue Main Image'
                    className='ba b--silver dn db-ns mt3 br2 mb0 pb0 w-100'
                    src={venueData.media.thumbnail}
                    transform={{quality: 'auto'}}
                  />

                  { venueData.events ? <EventList events={venueData.events} /> : null }
                  { venueData.related_venues ? <RelatedVenues venues={venueData.related_venues} /> : null }

                </section>

                <section className="w-100 w-50-ns pl4-ns">
                  <p className="system-sans-serif lh-copy">
                    {venueData.description}
                  </p>

                  <HoursList hours={venueData.hours} />

                  <article className="website">
                    <h5 className="mb1">
                      Website:
                    </h5>
                    <a className="blue dim fade" href={`http://${venueData.website}`} target="_blank">
                      {venueData.website}
                    </a>
                  </article>

                  <article className="physical-address">
                    <h5 className="mb1">
                      Address:
                    </h5>
                    <a
                      className="blue fade link mt0 pt0"
                      href={`https://maps.apple.com/?ll=${venueData.location.lat},${venueData.location.lng}&q=${venueData.name.full}`} target="_blank"
                    >
                      {venueData.address.formatted_address}
                    </a>
                  </article>

                  <article className="phone-number">
                    <h5 className="mb1">
                      Phone Number:
                    </h5>
                    <a href={`tel:${venueData.phone}`} className="blue dim fade">
                      {venueData.phone}
                    </a>
                  </article>

                </section>
              </div>


            </div>
          </div>
      </article>
    : <div className="vh-100 w-100 bg-near-white">
      </div>
  )
}

export default Venue
