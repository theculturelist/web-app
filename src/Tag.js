import React, { PropTypes } from 'react'

const Tag = (props) => (
  <span className={`bg-${props.bgColor} ${props.color}
    br-pill f6 mb1 mr1 pv1 ph2 flex items-center justify-center`
  }>
    {props.name}
  </span>
)

Tag.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
  text: PropTypes.string,
}

Tag.defaultProps = {
  bgColor: 'blue',
  color: 'near-white',
}

export default Tag;
