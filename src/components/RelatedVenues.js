import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import concat from 'lodash/concat'
import map from 'lodash/map'
import base from '../config/Rebase'
import CloudinaryImage from './CloudinaryImage'

class RelatedVenues extends Component {
  state = { relatedVenues: [], loaded: false }

  componentDidMount() {
    map(Object.keys(this.props.venues), venue => {
      base.fetch(`venues/${venue}`, {
        context: this,
      })
      .then(data => {
        this.setState({ relatedVenues: concat(this.state.relatedVenues, data) })
        this.checkIsFinished()
      })
      .catch(error => {
        console.log(error)
      })
    })
  }

  checkIsFinished = () => {
    if (this.state.relatedVenues.length === Object.keys(this.props.venues).length) {
      this.setState({ loaded: true })
    }
  }

  render() {
    return this.state.loaded ? (
      <section className="related-venues animated fadeIn">
        <h4 className="fw4 lh-copy mb1 underline">
          You Might Also Like:
        </h4>
        <ul className="list pl0">
          { map(this.state.relatedVenues, el => (
            <li
              className="flex items-center lh-copy ph0 pv2 bb b--black-10"
              key={Math.random()}
              >
              <CloudinaryImage
                alt={`${el.name.full}`}
                className='w2 h2 w3-ns h3-ns br-100'
                src={el.media.thumbnail}
                transform={{quality: 'auto'}}
              />
              <div className="pl3 flex-auto">
                <span className="f6 db black-70">
                  <Link to={`/venues/${el.id}`} className="link blue dim">{el.name.proper} {el.name.full}</Link>
                </span>
                <span className="f6 db black-70">
                  {el.address.city}, {el.address.state_short}
                </span>
              </div>
            </li>
          )) }
        </ul>
      </section>
    ) : <div>LOADING</div>
  }
}

export default RelatedVenues
