import React, { PropTypes as PT } from 'react';
import cn from 'classnames';

const Button = (props) => (
  <button
    className={cn(`bg-${props.color} ${props.textColor}
    bn br-pill dib link ph3 pointer outline-0 pv2 ttc`)}
    onClick={props.clickFunction}
  >
    {props.name}
  </button>
);

Button.propTypes = {
  clickFunction: PT.func.isRequired,
  color: PT.string,
  isToggled: PT.bool,
  name: PT.string.isRequired,
  textColor: PT.string,
};

Button.defaultProps = {
  isToggled: false,
  clickFunction() { console.warn('No Function Assigned')},
};

export default Button;
