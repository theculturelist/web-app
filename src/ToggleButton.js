import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const ToggleButton = props => (
  <button
    className={cn(`${props.textColor}
          toggle-button animated anim-duration-03 bn br-pill link outline-0 ttc white`,
      {
        [`bg-${props.toggledColor} pulse`]: props.isToggled,
        [`bg-${props.untoggledColor}`]: !props.isToggled,
        'o-50': props.disabled,
        'pointer': !props.disabled,
      }
    )}
    onClick={props.click}
    disabled={props.disabled}
  >
    <div className="pv2 ph2 flex items-center fw3">
      {props.children}
    </div>
  </button>
);

ToggleButton.propTypes = {
  isToggled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  click: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  textColor: PropTypes.string,
  toggledColor: PropTypes.string,
  untoggledColor: PropTypes.string,
};

ToggleButton.defaultProps = {
  isToggled: false,
  click() { console.warn('No Function Assigned')},
  disabled: false,
  toggledColor: 'blue',
  textColor: 'white',
  untoggledColor: 'gray',
};

export default ToggleButton;
