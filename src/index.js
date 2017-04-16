import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import animate from 'animate.css' //eslint-disable-line
import tachyons from 'tachyons' //eslint-disable-line
import animation from './css/animation.css' //eslint-disable-line
import gradients from './css/gradients.css' //eslint-disable-line
import icons from './css/style.css' //eslint-disable-line
import App from './App'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
