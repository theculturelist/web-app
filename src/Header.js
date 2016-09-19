import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="fixed bg-dark-gray w-100 pv2 z-1">
        <nav className="tc">
          <img className="w2" src="http://res.cloudinary.com/theculturelist/image/upload/q_auto/v1474244678/icon_yh2ghw.svg" alt="App icon"/>
        </nav>
      </header>
    );
  }
}

export default Header;
