import React, { PureComponent, PropTypes } from 'react';
import cn from 'classnames';

class ToggleButton extends PureComponent {
  render() {
    return(
      <button
        className={cn(`${this.props.textColor}
          toggle-button animated anim-duration-03 bn br-pill link outline-0 ttc white`,
          {
            [`bg-${this.props.toggledColor} pulse`]: this.props.isToggled,
            [`bg-${this.props.untoggledColor}`]: !this.props.isToggled,
            'o-50': this.props.disabled,
            'pointer': !this.props.disabled,
          }
        )}
        onClick={this.props.click}
        disabled={this.props.disabled}
      >
        <div className="pv2 ph2 flex items-center fw3">
          {this.props.children}
        </div>
      </button>
    )
  }
}

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
