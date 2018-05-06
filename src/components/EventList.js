import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import base from '../config/Rebase'
import concat from 'lodash/concat'
import map from 'lodash/map'
import EventListItem from './EventListItem'

class EventList extends PureComponent {
  static propTypes = {
    events: PropTypes.object
  }

  state = { eventsList: [], loaded: false }

  componentDidMount() {
    map(Object.keys(this.props.events), event => {
        base.fetch(`events/${event}`, {
          context: this,
        })
        .then(data => {
          this.setState({ eventsList: concat(this.state.eventsList, data) })
          this.checkIsFinished()
        })
        .catch(error => {
          console.log(error)
        })
    })
  }

  checkIsFinished = () => {
    if (this.state.eventsList.length === Object.keys(this.props.events).length) {
      this.setState({ loaded: true })
    }
  }

  render() {
    return(
      this.state.loaded ?
        <section>
          <h3 className="lh-title ul">
            Featured Programs and Exhibitions:
          </h3>
          <ul className="list pl0 center">
            {map(this.state.eventsList, event => (
              <EventListItem event={event} key={event.title}/>
            ))}

          </ul>
        </section>
      : <div>LOADING</div>
    )
  }
}

export default EventList
