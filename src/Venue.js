import React, { Component } from 'react'
import ReactSpinner from 'react-spinjs'
import NavBar from './NavBar'
import VenueHeader from './VenueHeader'
import base from './Base'
import CloudinaryImage from './CloudinaryImage'



export default class Venue extends Component {
  constructor(props) {
    super(props)
    this.state = { venue: false }
  }

  componentDidMount() {
    base.fetch(`venues/${this.props.params.id}`, { context: this })
    .then(data => {
      this.setState({venue: data})
    })
  }

  renderClosedOn(hours) {
    return hours ? <li className="ph0 pv1 i">Closed On: {hours}</li> : null
  }

  render() {
    const venue = this.state.venue
    return (
      venue ?
        <article>
          <NavBar />
          <div className="pt5 animated slideInRight">
            <CloudinaryImage
              alt='Venue Main Image'
              className='w-100 mb0 pb0'
              src={venue.media.widescreen}
              transform={{quality: 'auto'}}
            />

            <section className="ph3 dark-gray">
              <VenueHeader name={venue.name} abbreviation={venue.abbreviation} />

              <div className="bb b--dark-gray" />
              <div className="w-100 w-50-m w-60-l pr3-ns fl">
                <p className="f5 f4-ns fw2 georgia">{venue.description}</p>
              </div>
              <div className="w-100 w-50-m w-40-l pl3-ns fl">

                <h4 className="f5 f4-ns mb1">Website:</h4>
                <a className="dark-gray dim fade" href={`http://${venue.website}`} target="_blank">{venue.website}</a>

                <h4 className="f5 f4-ns mb1 pb0">Address:</h4>
                <p className="mt0 pt0">{venue.address.formatted_address}</p>

                <h4 className="f5 f4-ns mb1">Hours:</h4>
                <ul className="list mt0 pl0 ml0 f6 f5-ns">
                  <li className="ph0 pv1">Saturday: {venue.hours.saturday}</li>
                  <li className="ph0 pv1">Sunday: {venue.hours.sunday}</li>
                  <li className="ph0 pv1">Monday: {venue.hours.monday}</li>
                  <li className="ph0 pv1">Tuesday: {venue.hours.tuesday}</li>
                  <li className="ph0 pv1">Wednesday: {venue.hours.wednesday}</li>
                  <li className="ph0 pv1">Thursday: {venue.hours.thursday}</li>
                  <li className="ph0 pv1">Friday: {venue.hours.friday}</li>
                  {this.renderClosedOn(venue.hours.closed_on)}
                </ul>

                <h4 className="f5 f4-ns mb1">Phone Number:</h4>
                <p className="mt0 pt0 pb3">{venue.phone.main}</p>
              </div>
            </section>
          </div>
        </article>
      : <ReactSpinner />
    )
  }
}
