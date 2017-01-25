import React, { PropTypes } from 'react';
import cn from 'classnames';
//TODO: write animation speed override classes, e.g anim-speed-06s

const ToggleSwitch = (props) => {
  return (
    <div className='toggle-switch relative w3'>
      <button
        className={cn(`absolute animated anim-duration-03 b--light-silver ba bg-near-white br-100
        bw1 flex h2 items-center justify-center light-silver outline-0 pointer shadow-1 w2 z-1`,
        {
          'right-0 slideInLeft': props.isToggled,
          'left-0 slideInRight': !props.isToggled,
        })}
        onClick={props.click}
      >
      </button>
      <div
        className={cn('animated b--white ba br-pill db f6 flex items-center h2 justify-between white',
        {
          [`bg-${props.onColor}`]: props.isToggled,
          [`bg-${props.offColor}`]: !props.isToggled
        })}
      >
        { props.textDisplayed ?
          <div>
            <span className='f6 fw1 pl2 sans-serif ttu'>On</span>
            <span className='f6 fw1 pl1 sans-serif ttu'>Off</span>
          </div>
          : null
        }
      </div>
    </div>
  );
}

ToggleSwitch.propTypes = {
  click: PropTypes.func.isRequired,
  isToggled: PropTypes.bool,
  onColor: PropTypes.string,
  offColor: PropTypes.string,
  textDisplayed: PropTypes.bool
};

ToggleSwitch.defaultProps = {
  click() { console.warn('No Function Assigned')},
  isToggled: false,
  offColor: 'gray',
  onColor: 'blue',
  textDisplayed: false,
};

export default ToggleSwitch;
