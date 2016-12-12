import React, { PropTypes as PT } from 'react';
import { Link } from 'react-router';
import CloudinaryImage from './CloudinaryImage';

const NavBar = (props) => (
  <div className="navigation-layout">
    <header className="bg-dark-gray fixed h3 shadow-1 w-100 z-2">
      <nav className="flex flex-row items-center justify-around">
        <Link to="/" >
          <CloudinaryImage
            alt="The Culture List Icon"
            className='h2 mt3'
            src='icon_yh2ghw.svg'
          />
        </Link>
      </nav>
    </header>
    {props.children}
  </div>
)

NavBar.propTypes = {
  children: PT.node
}

export default NavBar
