import React from 'react'
import cn from 'classnames'

const LeftMenu = props => (
  <nav
    className={cn(`animated anim-duration-05 bg-near-white db-l fixed fl mt5 shadow-1 vh-100 w-80 w-40-m w-20-l z-2`,
    {
      "slideInLeft": props.isToggled,
      "dn": !props.isToggled,
    })}
  >
    {props.children}
  </nav>
)

export default LeftMenu;
