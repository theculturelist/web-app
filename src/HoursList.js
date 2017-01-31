import React, { PropTypes } from 'react'

const HoursList = (props) => (
  <div className="hours">
    <h5 className="mb1">
      Hours:
    </h5>
    <ul className="list mt0 pl0 ml0 f6">
      { props.hours.free_days ?
        <li className="ph0 pv1 i">
        Free Days: {props.hours.free_days}
        </li>
        : null
      }
      <li className="ph0 pv1">
        Sunday: {props.hours.sunday}
      </li>
      <li className="ph0 pv1">
        Monday: {props.hours.monday}
      </li>
      <li className="ph0 pv1">
        Tuesday: {props.hours.tuesday}
      </li>
      <li className="ph0 pv1">
        Wednesday: {props.hours.wednesday}
      </li>
      <li className="ph0 pv1">
        Thursday: {props.hours.thursday}
      </li>
      <li className="ph0 pv1">
        Friday: {props.hours.friday}
      </li>
      { props.hours.closed_on ?
        <li className="ph0 pv1 i">
        Closed On: {props.hours.closed_on}
        </li>
        : null
      }
    </ul>
  </div>
)

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
