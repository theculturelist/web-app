import React, { useState, useLayoutEffect } from 'react';
import base from './config/Rebase';
import concat from 'lodash/concat';
import map from 'lodash/map';
import EventListItem from './EventListItem';

const EventList = (props) => {
  const [eventsList, fillEventsList ] = useState([]);

  useLayoutEffect(() => {
    map(Object.keys(props.events), event => {
        base.fetch(`events/${event}`, {
          context: this,
        })
        .then(data => {fillEventsList(concat(eventsList, data)) })
        .catch(error => { console.log(error) })
    })
  }, [props.events, eventsList])

  return(
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
  )
}

export default EventList
