import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="bg-black-80 w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
        <nav className="f6 fw6 ttu tracked tr">
          <a className="link dim white dib mr3" href="#" title="Home">Home</a>
          <a className="link dim white dib mr3" href="#" title="About">Blog</a>
          <a className="link dim white dib mr3" href="#" title="Store">About</a>
          <a className="link dim white dib" href="#" title="Contact">Contact</a>
        </nav>
      </header>
    );
  }
}

export default Header;
