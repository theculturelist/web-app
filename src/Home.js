import React, { Component } from 'react'
import _ from 'lodash'
import hoursToday from './utilities'
import ToggleSwitch from './ToggleSwitch'
import ToggleButton from './ToggleButton'
import Button from './Button'
import VenueList from './VenueList'
const tags = _.sortBy([
  'free',
  'art',
  'modern',
  'cultural',
  'design',
  'science',
  'history',
  'gardens',
  'architecture',
  'family',
  'unique',
])

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.allVenues = JSON.parse(sessionStorage.getItem('venues'))
    this.addActiveFilter = this.addActiveFilter.bind(this)
    this.clearFilters = this.clearFilters.bind(this)
    this.filterByOpen = this.filterByOpen.bind(this)
    this.state = {
      venues: JSON.parse(sessionStorage.getItem('venues')),
      userLocation: JSON.parse(sessionStorage.getItem('userLocation')),
      filters: [],
    }
  }

  addActiveFilter(term) { this.setState({ filters: _.concat(this.state.filters, term) }) }

  clearFilters() { this.setState({ venues: this.allVenues, filters: [] }) }

  filterByOpen(state) {
    this.setState({ venues: _.filter(state, el => ( hoursToday(el.hours) !== 'Closed' )) })
    this.addActiveFilter('open')
  }

  filterByTags(state, term) {
    this.setState({ venues: _.filter(state, el => ( _.includes(el.tags, _.capitalize(term)))) })
    this.addActiveFilter(term)
  }

  render() {
    return (
      <div className="home">
        <nav className="bg-near-white db-l dn fixed fl mt5 overflow-y-scroll vh-100 w-20-l shadow-1">
          <section className="blue overflow-x-hidden">
            <header className="bg-blue white mb0 pv2 flex items-center justify-between ph2">
              <h2 className="f4">Filters</h2>
              <Button
                color={'white'}
                textColor={'blue'}
                name={'Clear All'}
                clickFunction={this.clearFilters}
              />
            </header>

            <h6 className="f6 fw1 pb2 ph2 mv2">Suggestion: Click the two that are most interesting to you</h6>

            <div className="filter-toggles flex flex-wrap flex-auto items-center">
              <ToggleButton
                click={()=> {this.filterByOpen(this.state.venues)}}
                isToggled={ _.includes(this.state.filters, 'nearby')}
              >
                Nearest To Me
              </ToggleButton>
              <ToggleButton
                click={()=> {this.filterByOpen(this.state.venues)}}
                isToggled={ _.includes(this.state.filters, 'open')}
              >
                Open Today
              </ToggleButton>
              {tags.map(tag => (
                <ToggleButton
                  click={() => { this.filterByTags(this.state.venues, tag) }}
                  isToggled={ _.includes(this.state.filters, tag) }
                  key={tag}
                >
                  {tag}
                </ToggleButton>
              ))}
            </div>
          </section>
        </nav>

        <div className="fr w-80-l">
          {this.state.venues ? <VenueList userLocation={this.state.userLocation} venues={this.state.venues} /> : null}
        </div>
      </div>
    )
  }
}
