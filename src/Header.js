import React from 'react';
import image from 'cloudinary';
import config from './config';
image.config(
  {
    cloud_name: config.cloudinary.cloud,
    api_key: config.cloudinary.api,
    api_secret: config.cloudinary.secret,
  }
)

export default class Header extends React.Component {
  render() {
    return (
      <div className="main-layout">
        <header className="bg-dark-gray fixed w-100 pv2 z-1">
          <nav className="tc">
            <img className="w2" src={image.url('icon_yh2ghw.svg', {quality: 'auto'})} alt="App icon"/>
          </nav>
        </header>
        <div className="pt1 cf">
          {this.props.children}
        </div>
      </div>
    );
  }
}
