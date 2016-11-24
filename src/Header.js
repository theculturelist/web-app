import React from 'react';
import CloudinaryImage from './CloudinaryImage';

export default class Header extends React.Component {
  render() {
    return (
      <div className="main-layout">
        <header className="bg-dark-gray fixed w-100 pv2 z-1">
          <nav className="tc">
            <CloudinaryImage
              alt="The Culture List Icon"
              className='w2'
              src='icon_yh2ghw.svg'
              />
          </nav>
        </header>
        <div className="pt1 cf">
          {this.props.children}
        </div>
      </div>
    );
  }
}
