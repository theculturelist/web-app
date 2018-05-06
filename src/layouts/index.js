import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import animation from './animation.css';
import gradients from './gradients.css';
import icons from './style.css';
import tachyons from 'tachyons';

import Header from '../components/header'
import './style.css'

const Layout = ({ children, data }) => (
  <div className="system-sans-serif">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
