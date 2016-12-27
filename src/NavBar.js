import React, { PropTypes as PT } from 'react'
import { Link } from 'react-router'
import CloudinaryImage from './CloudinaryImage'

const NavBar = props => (
  <div className='nav-bar'>
    <header className='bg-dark-gray fixed h3 shadow-1 w-100 z-2 flex items-center ph2'>
      <div className='absolute w-100 flex h3 items-center justify-center top-0'>
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
    </header>
  </div>
)

NavBar.propTypes = {
  children: PT.node
}

export default NavBar
