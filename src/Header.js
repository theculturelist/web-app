import React from 'react';
import { Link } from 'react-router';
import CloudinaryImage from './CloudinaryImage';

const Header = (props) => (
  <div className="main-layout">
    <header className="w-100 fixed h3 bg-dark-gray z-2 shadow-1">
      <nav className="flex flex-row justify-around items-center">
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
);

export default Header;
