import React, { Component } from 'react'
import ReactSpinner from 'react-spinjs'
import NavBar from './NavBar'
import VenueHeader from './VenueHeader'
import RelatedVenues from './RelatedVenues'
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

  renderClosedOn = (hours) => {
    return hours ? <li className="ph0 pv1 i">Closed On: {hours}</li> : null
  }

  render() {
    const venue = this.state.venue
    return (
      this.state.loaded ?
        <article style={{
          background:
          `url(http://res.cloudinary.com/theculturelist/image/upload/e_blur:200/q_auto/${venue.media.widescreen}) no-repeat center center fixed`,
          backgroundSize: 'cover'}}>
          <NavBar />
          <div className="pt5 pt6-ns vh-100">
            <CloudinaryImage
              alt='Venue Main Image'
              className='dn-ns w-100'
              src={venue.media.widescreen}
              transform={{quality: 'auto'}}
            />

            <div className="bg-near-white br2-ns center dark-gray ph2 ph4-l pv2 mb3 w-100 w-80-ns shadow-1">
              <VenueHeader name={venue.name} size={'f3 f2-l'} />
              <hr />
              <div className="flex">

                <section className="w-50 dn db-ns">
                  <CloudinaryImage
                    alt='Venue Main Image'
                    className='ba b--silver mt3 br2 mb0 pb0 w-100'
                    src={venue.media.thumbnail}
                    transform={{quality: 'auto'}}
                  />
                </section>

                <section className="w-100 w-50-ns pl4-ns">
                  <p className="system-sans-serif lh-copy">
                    {venue.description}
                  </p>

                  <div className="hours">
                    <h4 className="mb1">
                      Hours:
                    </h4>
                    <ul className="list mt0 pl0 ml0 f6">
                      <li className="ph0 pv1">
                        Saturday: {venue.hours.saturday}
                      </li>
                      <li className="ph0 pv1">
                        Sunday: {venue.hours.sunday}
                      </li>
                      <li className="ph0 pv1">
                        Monday: {venue.hours.monday}
                      </li>
                      <li className="ph0 pv1">
                        Tuesday: {venue.hours.tuesday}
                      </li>
                      <li className="ph0 pv1">
                        Wednesday: {venue.hours.wednesday}
                      </li>
                      <li className="ph0 pv1">
                        Thursday: {venue.hours.thursday}
                      </li>
                      <li className="ph0 pv1">
                        Friday: {venue.hours.friday}
                      </li>
                      {this.renderClosedOn(venue.hours.closed_on)}
                    </ul>
                  </div>

                  <article className="website">
                    <h4 className="mb1">
                      Website:
                    </h4>
                    <a className="blue dim fade" href={`http://${venue.website}`} target="_blank">
                      {venue.website}
                    </a>
                  </article>

                  <article className="physical-address">
                    <h4 className="mb1">
                      Address:
                    </h4>
                    <p className="mt0 pt0">
                      {venue.address.formatted_address}
                    </p>
                  </article>

                  <article className="phone-number">
                    <h4 className="mb1">
                      Phone Number:
                    </h4>
                    <a href="tel:" className="blue dim fade">
                      {venue.phone}
                    </a>
                  </article>

                </section>
              </div>

              <section>
                { venue.related_venues ?
                  <RelatedVenues relatedVenues={venue.related_venues} /> : null
                }
              </section>
            </div>
          </div>
        </article>
      : <ReactSpinner />
    )
  }
}

export default Venue
