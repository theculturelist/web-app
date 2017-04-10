import React, { Component } from 'react'
import PromisedLocation from 'promised-location'
import { capitalize, concat, filter, includes, sortBy, map } from 'lodash'
import Icon from './Icon'
import NavBar from './NavBar'
import LeftMenu from './LeftMenu'
import { hoursToday } from './utilities'
import SearchBar from './SearchBar'
import Button from './Button'
import ToggleButton from './ToggleButton'
import VenueList from './VenueList'
import Message from './Message'
import { metersAway, metersToMiles } from './utilities'

class Home extends Component {
    tags = [
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
      'mechanical'
    ]
    state = {
      activeFilters: [],
      allVenues: JSON.parse(sessionStorage.getItem('venues')),
      leftMenuToggled: false,
      userLocation: '',
      venues: JSON.parse(sessionStorage.getItem('venues')),
    }

  componentWillMount() {
    this.getUserLocation()
  }

  getUserLocation = () => {
    const locator = new PromisedLocation()
    locator.then(position => {
      const location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }
      this.setState({'userLocation' : location})
      this.updateVenueLocations()
    })
  }

  updateVenueLocations = () => {
    const venue_data = this.state.venues.map(venue => {
      venue.distance = metersToMiles(metersAway(this.state.userLocation, venue.location))
      return venue
    })

    this.setState({venues: venue_data, allVenues: venue_data })
  }

  addActiveFilter = (term) => {
    this.setState({ activeFilters: concat(this.state.activeFilters, term) })
  }

  clearFilters = () => {
    this.setState({ venues: this.state.allVenues, activeFilters: [] })
  }

  sortNearby = (state, term) => {
    this.setState({ venues: sortBy(state, ['distance']) })
    this.addActiveFilter(term)
  }

  filterByOpen = (state, term) => {
    this.setState({ venues: filter(state, el => ( hoursToday(el.hours) !== 'Closed' )) })
    this.addActiveFilter(term)
  }

  filterByTag = (state, term) => {
    this.setState({
      venues: filter(state, el => ( includes(Object.keys(el.tags), capitalize(term))))
    })
    this.addActiveFilter(term)
  }

  filterBySearch = (venues, query) => {
    const regex = new RegExp(query, 'gi')
    this.setState({ venues: filter(venues, venue => venue.name.full.match(regex)) })
  }

   toggleLeftMenu = () => {
    this.state.leftMenuToggled ?
    this.setState({ leftMenuToggled: false }) : this.setState({ leftMenuToggled: true})
  }

  render() {
    return (
      <div className='home'>
        <NavBar>
          <ToggleButton
            click={this.toggleLeftMenu}
            isToggled={this.state.leftMenuToggled}
            toggledColor={'gray'}
            untoggledColor={'green-gradient'}
          >
            <div className="f6 fw1">Filters</div>
          </ToggleButton>
        </NavBar>

        <LeftMenu isToggled={this.state.leftMenuToggled}>
          <section className='blue overflow-x-hidden'>
            <header className='bg-blue white flex items-center justify-between pv1 ph2'>
              <h2 className='f4'>Filters:</h2>
              <div className="flex">
                  <Button
                  color={'light-blue'}
                  textColor={'white'}
                  name={'Reset'}
                  clickFunction={this.clearFilters}
                />
                <div className="dn-l ml2">
                  <Button
                    color={'white'}
                    textColor={'blue'}
                    name={'Apply'}
                    clickFunction={this.toggleLeftMenu}
                  />
                </div>
              </div>
            </header>

            <div className='filter-toggles flex flex-wrap ph2 mt2'>
              <div className="mb2 mr2">
                <ToggleButton
                  click={() => this.sortNearby(this.state.venues, 'distance')}
                  isToggled={ includes(this.state.activeFilters, 'distance')}
                >
                  <div className="pr1">Nearby</div><Icon iconName={'nearby'} />
                </ToggleButton>
              </div>
              <div className="mb2 mr2">
                <ToggleButton
                  click={() => { this.filterByOpen(this.state.venues, 'open') }}
                  isToggled={ includes(this.state.activeFilters, 'open')}
                >
                  <div className="pr1">Open Today</div><Icon iconName={'open'} />
                </ToggleButton>
              </div>
              {this.tags.map(tag => (
                <div className="mb2 mr2" key={tag}>
                  <ToggleButton
                    click={() => { this.filterByTag(this.state.venues, tag) }}
                    isToggled={ includes(this.state.activeFilters, tag) }
                  >
                    <div className="pr1">{tag}</div><Icon iconName={tag} />
                  </ToggleButton>
                </div>
              ))}
            </div>
            <h6 className='f6 fw1 pb2 ph2 mv2'>
              Suggestion: Click the two that are most interesting to you
            </h6>
          </section>
        </LeftMenu>

        <section className='fr w-100 w-80-l'>
          <SearchBar
            onFocus={this.clearFilters}
            filterSearch={ (e) => this.filterBySearch(this.allVenues, e.target.value) }
          />

          { this.state.venues.length === 0 ?
            <Message
              text={`You got a little too specific, we didn't find anything.`}
            /> : <VenueList venues={this.state.venues} />
          }
        </section>
      </div>
    )
  }
}
export default Home
