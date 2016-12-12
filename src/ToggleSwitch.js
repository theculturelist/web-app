import React, { PropTypes as PT } from 'react';
import cn from 'classnames';
//TODO: write animation speed override classes, e.g anim-speed-06s

const ToggleSwitch = (props) => {
  return (
    <div className='toggle-switch relative w3'>
      <button
        style={{ animationDuration: '0.5s' }}
        className={cn(`absolute animated b--light-silver ba bg-near-white br-pill bw1 flex h2
        items-center justify-center light-silver outline-0 pointer shadow-1 w2 z-1`,
        {
          'right-0 slideInLeft': props.isOn,
          'left-0 slideInRight': !props.isOn,
        })}
        onClick={props.toggleFunction}
      >
        <span className='f6 ma0 pa0'>|||</span>
      </button>
      <div
        className={cn('animated br-pill db f6 flex items-center h2 justify-between white',
        {
          'bg-blue': props.isOn,
          'bg-gray': !props.isOn
        })}
      >
        <span className='f6 pl2 sans-serif ttu'>On</span>
        <span className='f6 pr1 sans-serif ttu'>Off</span>
      </div>
    </div>
  );
}

ToggleSwitch.propTypes = {
  isOn: PT.bool,
  toggleFunction: PT.func.isRequired
};

ToggleSwitch.defaultProps = {
  inOn: false,
  toggleFunction() { console.warn('No Function Assigned')},
};

export default ToggleSwitch;
