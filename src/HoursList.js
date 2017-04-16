import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class HoursList extends PureComponent {
  render() {
    return(
      <div className="hours">
        <h5 className="mb1">
          Hours:
        </h5>
        <ul className="list mt0 pl0 ml0 f6">
          { this.props.hours.free_days ?
            <li className="ph0 pv1 i">
            Free Days: {this.props.hours.free_days}
            </li>
            : null
          }
          <li className="ph0 pv1">
            Sunday: {this.props.hours.sunday}
          </li>
          <li className="ph0 pv1">
            Monday: {this.props.hours.monday}
          </li>
          <li className="ph0 pv1">
            Tuesday: {this.props.hours.tuesday}
          </li>
          <li className="ph0 pv1">
            Wednesday: {this.props.hours.wednesday}
          </li>
          <li className="ph0 pv1">
            Thursday: {this.props.hours.thursday}
          </li>
          <li className="ph0 pv1">
            Friday: {this.props.hours.friday}
          </li>
          { this.props.hours.closed_on ?
            <li className="ph0 pv1 i">
            Closed On: {this.props.hours.closed_on}
            </li>
            : null
          }
        </ul>
      </div>
    )
  }
}

HoursList.propTypes = {
  hours: PropTypes.shape({
    closed_on: PropTypes.string,
    free_days: PropTypes.string,
    friday: PropTypes.string.isRequired,
    monday: PropTypes.string.isRequired,
    saturday: PropTypes.string.isRequired,
    sunday: PropTypes.string.isRequired,
    thursday: PropTypes.string.isRequired,
    tuesday: PropTypes.string.isRequired,
    wednesday: PropTypes.string.isRequired,
  }),
}

export default HoursList;
