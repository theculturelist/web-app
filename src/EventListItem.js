import React, { PureComponent, PropTypes } from 'react'
import moment from 'moment'

class EventListItem extends PureComponent {
  render() {
    return (
      <li key={this.props.event.title} className="mv2 ba bl-0 bt-0 br-0 b--dotted b--black-30">
        <a href={this.props.event.url} className="blue dim link pointer" target="_blank">
          {this.props.event.title}
        </a>
        {this.props.event.ongoing ?
          <p>
            Ongoing
          </p> :
          <p>
            { moment(this.props.event.start_date).format('MMM D, YYYY') } to { moment(this.props.event.end_date).format('MMM D, YYYY') }
          </p>
        }
      </li>
    )
  }
}

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
