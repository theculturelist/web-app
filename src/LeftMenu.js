import React from 'react';
import cn from 'classnames';

const LeftMenu = props => (
  <nav
    className={cn(`animated anim-duration-05 bg-near-white db-l fixed fl shadow-4 vh-100 w-80 w-60-m w-20-l z-1`,
      {
        "slideInLeft": props.isToggled,
        "dn": !props.isToggled,
      })}
    style={{ marginTop: '6em' }}
  >
    {props.children}
  </nav>
);

export default LeftMenu;
