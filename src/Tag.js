import React, { PureComponent, PropTypes } from 'react'

class Tag extends PureComponent {
  render() {
    return (
      <span
        className={`bg-${this.props.bgColor} ${this.props.color}
        br-pill mb1 mr1 pv1 ph2 dib `}
        style={{fontSize: '.75rem'}}
      >
        <i className={`icon-${this.props.name.toLowerCase()}`} /> {this.props.name}
      </span>
    )
  }
}

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
