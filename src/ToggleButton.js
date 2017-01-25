import React, { PropTypes } from 'react';
import cn from 'classnames';

const ToggleButton = (props) => (
  <button
    className={cn(`${props.textColor}
      toggle-button animated anim-duration-03 bn br-pill dib f6 flex items-center link outline-0 ph3
      pointer pv2 ttc white`,
      {
        [`bg-${props.toggledColor} pulse`]: props.isToggled,
        [`bg-${props.untoggledColor}`]: !props.isToggled,
      }
    )}
    onClick={props.click}
  >
    {props.children}
  </button>
);

ToggleButton.propTypes = {
  isToggled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  click: PropTypes.func.isRequired,
  textColor: PropTypes.string,
  toggledColor: PropTypes.string,
  untoggledColor: PropTypes.string,
};

ToggleButton.defaultProps = {
  isToggled: false,
  click() { console.warn('No Function Assigned')},
  toggledColor: 'blue',
  textColor: 'white',
  untoggledColor: 'gray',
};

export default ToggleButton;
