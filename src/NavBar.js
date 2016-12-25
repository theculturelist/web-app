import React, { PropTypes as PT } from 'react'
import { Link } from 'react-router'
import CloudinaryImage from './CloudinaryImage'

const NavBar = props => (
  <div className='nav-bar'>
    <header className='bg-dark-gray fixed shadow-1 z-2 w-100'>
      <nav className='h3 flex items-center mh2'>
        <div className='absolute w-100 flex h3 items-center justify-center'>
          <Link to='/'>
            <CloudinaryImage
              alt='The Culture List Icon'
              className='h2 w2 pointer'
              src='icon_yh2ghw.svg'
            />
          </Link>
        </div>
        <div className="flex dn-l z-3">
          {props.children}
        </div>
      </nav>
    </header>
  </div>
)

NavBar.propTypes = {
  children: PT.node
}

export default NavBar
