import React, { PureComponent } from 'react';
import cn from 'classnames';

class LeftMenu extends PureComponent {
  render() {
    return (
      <nav
        className={cn(`animated anim-duration-05 bg-near-white db-l fixed fl shadow-4 vh-100 w-80 w-60-m w-20-l z-1`,
        {
          "slideInLeft": this.props.isToggled,
          "dn": !this.props.isToggled,
        })}
        style={{marginTop: '6em'}}
      >
        {this.props.children}
      </nav>
    )
  }
}

export default LeftMenu;
