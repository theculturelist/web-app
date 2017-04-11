import React, { Component } from 'react'
import ReactSpinner from 'react-spinjs'
import NavBar from './NavBar'
import VenueHeader from './VenueHeader'
import HoursList from './HoursList'
import RelatedVenues from './RelatedVenues'
import EventList from './EventList'
import base from './config/Rebase'
import CloudinaryImage from './CloudinaryImage'

class Venue extends Component {
  state = { venue: false, loaded: false }

  componentDidMount() {
    this.fetchRelatedVenues(this.props.params.id)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.id !== this.props.params.id ) {
      this.setState({ loaded: false })
      this.fetchRelatedVenues(nextProps.params.id)
    }
  }

  fetchRelatedVenues = (key) => {
    base.fetch(`venues/${key}`, { context: this })
    .then(data => {
      this.setState({venue: data, loaded: true })
    })
  }

  render() {
    const venue = this.state.venue
    return (
      this.state.loaded ?
        <article style={{
          background:
          `url(https://res.cloudinary.com/theculturelist/image/upload/e_blur:200/q_auto/${venue.media.widescreen}) no-repeat center center fixed`,
          backgroundSize: 'cover'}}>

          <NavBar />

          <div className="pt5 pt6-ns vh-100">
            <CloudinaryImage
              alt='Venue Main Image'
              className='dn-ns w-100'
              src={venue.media.widescreen}
              transform={{quality: 'auto'}}
            />

            <div className="bg-near-white br2-ns center dark-gray ph2 ph5-l pt2 pb5 mb4 w-100 w-80-ns shadow-2">
              <VenueHeader name={venue.name} size={'f3 f2-l'} />
              <hr />
              <div className="flex flex-wrap">

                <section className="w-100 order-0-ns order-last w-50-ns">
                  <CloudinaryImage
                    alt='Venue Main Image'
                    className='ba b--silver dn db-ns mt3 br2 mb0 pb0 w-100'
                    src={venue.media.thumbnail}
                    transform={{quality: 'auto'}}
                  />

                  { venue.events ? <EventList events={venue.events} /> : null }
                  { venue.related_venues ? <RelatedVenues venues={venue.related_venues} /> : null }

                </section>

                <section className="w-100 w-50-ns pl4-ns">
                  <p className="system-sans-serif lh-copy">
                    {venue.description}
                  </p>

                  <HoursList hours={venue.hours} />

                  <article className="website">
                    <h5 className="mb1">
                      Website:
                    </h5>
                    <a className="blue dim fade" href={`http://${venue.website}`} target="_blank">
                      {venue.website}
                    </a>
                  </article>

                  <article className="physical-address">
                    <h5 className="mb1">
                      Address:
                    </h5>
                    <a
                      className="blue fade link mt0 pt0"
                      href={`https://maps.apple.com/?ll=${venue.location.lat},${venue.location.lng}&q=${venue.name.full}`} target="_blank"
                    >
                      {venue.address.formatted_address}
                    </a>
                  </article>

                  <article className="phone-number">
                    <h5 className="mb1">
                      Phone Number:
                    </h5>
                    <a href={`tel:${venue.phone}`} className="blue dim fade">
                      {venue.phone}
                    </a>
                  </article>

                </section>
              </div>


            </div>
          </div>
        </article>
      : <ReactSpinner />
    )
  }
}

export default Venue
