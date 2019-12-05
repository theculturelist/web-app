import React, { useState, useEffect } from 'react';
import base from './config/Rebase';
import concat from 'lodash/concat';
import map from 'lodash/map';
import EventListItem from './EventListItem';

const EventList = () => {
  const [eventsList, fillEventsList ] = useState([]);
  const [eventsLoaded, loadEvents] = useState(false);

  useEffect(() => {
    map(Object.keys(this.props.events), event => {
        base.fetch(`events/${event}`, {
          context: this,
        })
        .then(data => {
          fillEventsList(concat(eventsList, data));
          checkIsFinished()
        })
        .catch(error => {
          console.log(error)
        })
    })
  })

  const checkIsFinished = () => {
    if (eventsList.length === Object.keys(this.props.events).length) {
      loadEvents(true);
    }
    return false;
  }

  return(
    eventsLoaded ?
      <section>
        <h3 className="lh-title ul">
          Featured Programs and Exhibitions:
        </h3>
        <ul className="list pl0 center">
          {map(eventsList, event => (
            <EventListItem
              event={event}
              key={event.title}
            />
          ))}

        </ul>
      </section>
    : <div>LOADING</div>
  )
}

export default EventList
