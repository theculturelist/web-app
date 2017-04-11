import React, { PropTypes as PT } from 'react'
import { Link } from 'react-router'
import CloudinaryImage from './CloudinaryImage'

const NavBar = props => (
  <div className='nav-bar fixed z-2'>
    <div className="fixed h2 w-100 bg-black-90 flex items-center justify-end">
      <div className="mr4">
        <Link to='/' className="f6 link near-white dim">
          Instagram
        </Link>
        <Link to='/' className="f6 ml2 link near-white dim">
          Twitter
        </Link>
        <Link to='/' className="f6 ml2 link near-white dim">
          Facebook
        </Link>
      </div>
    </div>
    <header className='mt4 bg-black-70 fixed h3 shadow-4 w-100 flex items-center justify-between ph3'>
      <div className="dn-l">
        {props.children}
      </div>
      <Link to='/' className="pointer">
        <div className="dn-ns">
          <CloudinaryImage
            alt='The Culture List Icon'
            className='h2 w2 pointer'
            src='icon_yh2ghw.svg'
          />
        </div>
        <div className="dn db-ns">
          <CloudinaryImage
            alt='The Culture List'
            src='/landing-page/TCL_logo_white_icon_blue.png'
            style={{ height: "2.5rem"}}
          />
        </div>
      </Link>
      <div className='flex h3 items-center justify-end top-0'>
        <div className="mr3">
          <a href='http://theculturelist.org/blog' className="ml3 link pointer near-white dim">
            Blog
          </a>
        </div>
      </div>
    </header>
  </div>
)

NavBar.propTypes = {
  children: PT.node
}

export default NavBar
