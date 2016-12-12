import React, { PropTypes as PT } from 'react';
import NavBar from '../NavBar';

const Navigation = (props) => (
  <div className="navigation-layout">
    <NavBar />
    {props.children}
  </div>
)

Navigation.propTypes = {
  children: PT.any,
}

export default Navigation
