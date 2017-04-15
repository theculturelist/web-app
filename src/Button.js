import React, { PureComponent, PropTypes } from 'react';

class Button extends PureComponent {
  render() {
    return (
      <button className={`bg-${this.props.color} ${this.props.textColor} f${this.props.fontSize}
        bn br-pill dib link ph3 pointer outline-0 pv2 ttc`}
        onClick={this.props.clickFunction}
        disabled={this.props.disabled}
        >
        {this.props.children}
      </button>
    );
  }
}


Button.propTypes = {
  clickFunction: PropTypes.func,
  color: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  children: PropTypes.node,
  textColor: PropTypes.string,
};

Button.defaultProps = {
  color: 'blue',
  fontSize: '6',
  textColor: 'white',
};

export default Button;
