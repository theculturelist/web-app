import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import logo from './images/logo.png'
import icon from './images/icon.svg'

class NavBar extends PureComponent {
  render() {
    return (
      <div className='nav-bar fixed z-2'>
        <div className="fixed h2 w-100 bg-near-black flex items-center justify-center justify-end-ns ph4">
          <a href="https://www.instagram.com/culture_list" rel="noopener noreferrer" target="_blank" className="pv2 ph3 f4 pointer link light-gray dim outline-0">
            <i className="icon-instagram"/>
          </a>
          <a href="https://twitter.com/culture_list" rel="noopener noreferrer" target="_blank" className="pv2 ph3 f4 pointer link light-gray dim outline-0">
            <i className="icon-twitter"/>
          </a>
          <a href="https://www.facebook.com/theculturelist" rel="noopener noreferrer" target="_blank" className="pv2 ph3 f4 pointer link light-gray dim outline-0">
            <i className="icon-facebook"/>
          </a>
        </div>
        <header className='mt4 bg-gradient-dark-gray fixed h3 shadow-4 w-100 flex items-center justify-between ph3'>
          <div className="dn-l">
            {this.props.children}
          </div>
          <Link to='/' className="pointer">
            <div className="dn-ns">
              <img
                className='h2 w2 pointer'
                src={icon}
                alt='The Culture List'
              />
            </div>
            <div className="dn db-ns">
              <img
                src={logo}
                alt='The Culture List'
                style={{ height: "2.5rem"}}
              />
            </div>
          </Link>
          <div className='flex h3 items-center justify-end top-0'>
            <div className="mr3">
              <a href='http://theculturelist.org/blog' className="ml3 link pointer near-white dim outline-0">
                Blog
              </a>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

NavBar.propTypes = {
  children: PropTypes.node
}

export default NavBar;
