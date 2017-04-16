import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Message extends PureComponent {
  render() {
    return (
      <div className="flex items-center justify-center pa4 bg-navy near-white mt2">
        <svg className="w1 h1" data-icon="info" viewBox="0 0 32 32" style={{fill: 'currentcolor'}}>
          <title>info icon</title>
          <path d="M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6"></path>
        </svg>
        <span className="lh-title ml3">{this.props.text}</span>
      </div>
    )
  }
}

Message.propTypes = {
  text: PropTypes.string,
}

Message.defaultProps = {
  text: 'Something Went Weird.'
}

export default Message;
