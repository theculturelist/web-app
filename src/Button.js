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
  clickFunction: PT.func,
  color: PT.string,
  name: PT.string.isRequired,
  textColor: PT.string,
};

Button.defaultProps = {
  color: 'blue',
  textColor: 'white'
};

export default Button;
