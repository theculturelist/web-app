import React from 'react'
import { Helmet } from 'react-helmet'
import { render } from 'react-snapshot'
import { BrowserRouter } from 'react-router-dom'
import animate from 'animate.css' //eslint-disable-line
import tachyons from 'tachyons' //eslint-disable-line
import animation from './css/animation.css' //eslint-disable-line
import gradients from './css/gradients.css' //eslint-disable-line
import icons from './css/style.css' //eslint-disable-line
import App from './App'

render(
  <BrowserRouter>
    <div className="system-sans-serif">
      <Helmet>
        <meta
          property="og:url"
          content={process.env.REACT_APP_ROOT_URL}
        />
        <meta
          property="og:type"
          content="article"
        />
        <meta
          property="og:title"
          content="The Culture List"
        />
        <meta
          property="og:description"
          content="Your City in Your Back Yard"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/theculturelist/image/upload/c_scale,w_1200/v1455233737/Griffith-16x9_pjysz1.jpg"
        />
        <meta
          property="og:image:width"
          content="1200"
        />
        <meta
          property="og:image:height"
          content="675"
        />
      </Helmet>
      <App />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
