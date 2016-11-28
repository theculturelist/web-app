import React from 'react';
import { Link } from 'react-router';
import CloudinaryImage from './CloudinaryImage';

export default class Header extends React.Component {
  render() {
    return (
      <header className="bg-dark-gray fixed w-100 pv2 z-2 shadow-1">
        <nav className="tc">
          <Link to="/" >
          <CloudinaryImage
            alt="The Culture List Icon"
            className='w2'
            src='icon_yh2ghw.svg'
            />
          </Link>
        </nav>
      </header>
    );
  }
}
