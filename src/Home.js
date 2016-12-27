import React, { Component } from 'react'
import _ from 'lodash'
import NavBar from './NavBar'
import LeftMenu from './LeftMenu'
import hoursToday from './utilities'
import ToggleButton from './ToggleButton'
import ToggleSwitch from './ToggleSwitch'
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
  'mechanical',
])

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.addActiveFilter = this.addActiveFilter.bind(this)
    this.allVenues = JSON.parse(sessionStorage.getItem('venues'))
    this.clearFilters = this.clearFilters.bind(this)
    this.filterByOpen = this.filterByOpen.bind(this)
    this.filterByTag = this.filterByTag.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
    this.state = {
      activeFilters: [],
      filterBarToggled: false,
      filters: [],
      userLocation: JSON.parse(sessionStorage.getItem('userLocation')),
      venues: JSON.parse(sessionStorage.getItem('venues')),
    }
  }

  addActiveFilter(term) {  this.setState({ activeFilters: _.concat(this.state.activeFilters, term) })  }

  clearFilters() {  this.setState({ venues: this.allVenues, activeFilters: [] })  }

  filterByOpen(state) {
    this.setState({ venues: _.filter(state, el => ( hoursToday(el.hours) !== 'Closed' )) })
    this.addActiveFilter('open')
  }

  filterByTag(state, term) {
    this.setState({ venues: _.filter(state, el => ( _.includes(el.tags, _.capitalize(term)))) })
    this.addActiveFilter(term)
  }

  toggleMenu() {
    return this.state.filterBarToggled ?
    this.setState({ filterBarToggled: false }) : this.setState({ filterBarToggled: true})
  }

  render() {
    return (
      <div className='home'>
        <NavBar>
          <ToggleSwitch
            click={this.toggleMenu}
            isToggled={this.state.filterBarToggled}
          />
        </NavBar>

        <LeftMenu
          activeFilters={this.state.activeFilters}
          clearFilters={this.clearFilters}
          filterByOpen={()=> {this.filterByOpen(this.state.venues)}}
          isToggled={this.state.filterBarToggled}
        >
          {tags.map(tag => (
            <div className="ml1 mb1" key={tag}>
              <ToggleButton
                click={() => { this.filterByTag(this.state.venues, tag) }}
                isToggled={ _.includes(this.state.activeFilters, tag) }
              >
                {tag}
              </ToggleButton>
            </div>
          ))}
        </LeftMenu>


        <div className='fr w-80-l'>
          {this.state.venues ? <VenueList userLocation={this.state.userLocation} venues={this.state.venues} /> : null}
        </div>
      </div>
    )
  }
}
