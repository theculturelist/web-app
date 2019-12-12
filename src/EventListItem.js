import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const EventListItem = (props) => (
  <li key={props.event.title} className="mv2 ba bl-0 bt-0 br-0 b--dotted b--black-30">
    <a href={props.event.url} className="blue dim link pointer" target="_blank">
      {props.event.title}
    </a>
    {props.event.ongoing ?
      <p>
        Ongoing
      </p> :
      <p>
        { moment(props.event.start_date).format('MMM D, YYYY') } to { moment(props.event.end_date).format('MMM D, YYYY') }
      </p>
    }
  </li>
)


EventListItem.propTypes = {
  event: PropTypes.shape({
    end_date: PropTypes.string,
    ongoing: PropTypes.string,
    start_date: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
  })
}

export default EventListItem;
