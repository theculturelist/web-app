import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className="main-layout">
        <header className="bg-dark-gray w-100 pv2 z-1 ">
          <nav className="tc">
            <img className="w2" src="http://res.cloudinary.com/theculturelist/image/upload/q_auto/v1474244678/icon_yh2ghw.svg" alt="App icon"/>
          </nav>
        </header>
        <div className="pt1 cf">
          {this.props.children}
        </div>
      </div>
    );
  }
}
