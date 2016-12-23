import React from 'react'
import ReactSpinner from 'react-spinjs'
import _ from 'lodash'
import CloudinaryImage from './CloudinaryImage'

const Messages = [
  'Reticulating Splines',
  'Setting Phasers to Stun',
  'Aligning the Planets',
  'Contacting the Mothership',
  'Initializing your Experience',
  'Twiddling Knobs and Pushing Buttons'
]

const InitScreen = (props) => (
  <section className="bg-navy flex flex-column justify-between vh-100 w-100 white">
    <CloudinaryImage
      className="ph2 pv4 mt3 w-50-l self-center"
      src={'logo-white.png'}
      alt={'logo'}
      transform={{quality: 'auto'}}
    />
    <ReactSpinner width={100} height={100} color="white" />
    <h1 className="f3 f2-l fw1 pv4 tc">{ Messages[_.random(Messages.length - 1)] }...</h1>
    <h2 className="f5 f4-l fw1 pv4 tc">{'To give you the best experience.'}</h2>
  </section>
)

export default InitScreen
