import React from 'react'
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
      <App />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
