import React, { PropTypes } from 'react';
import cn from 'classnames';

const Button = (props) => (
  <button
    className={cn(`bg-${props.color} ${props.textColor} f${props.fontSize}
    bn br-pill dib link ph3 pointer outline-0 pv2 ttc`)}
    onClick={props.clickFunction}
  >
    {props.name}
  </button>
);

Button.propTypes = {
  clickFunction: PropTypes.func,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  name: PropTypes.string.isRequired,
  textColor: PropTypes.string,
};

Button.defaultProps = {
  color: 'blue',
  fontSize: '6',
  textColor: 'white',
};

export default Button;
