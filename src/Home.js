import React, { Component } from 'react';
import _ from 'lodash';
import hoursToday from './utilities';
import ToggleSwitch from './ToggleSwitch';
import VenueList from './VenueList';
const tags = [
  'free',
  'art',
  'modern',
  'cultural',
  'science',
  'history',
  'gardens',
  'architecture',
  'family',
  'unique',
]

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      venues: JSON.parse(sessionStorage.getItem('venues')),
      sortedByOpen: false,
      userLocation: false,
      filters: [ 'free', 'art', 'modern', 'cultural', 'science', 'history', 'gardens', 'architecture', 'family', 'unique']
    };

    this.allVenues = JSON.parse(sessionStorage.getItem('venues'));
    this.filterTodaysVenues = this.filterTodaysVenues.bind(this)
    this.getUserLocation = this.getUserLocation.bind(this)
  }

  getUserLocation() {
    if (navigator.geolocation && !sessionStorage.getItem('userLocation')) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const location = { latitude: pos.coords.latitude, longitude: pos.coords.longitude }
        this.setState({ userLocation: location })
      })
    }
  }

  filterTodaysVenues(array) {
    if (this.state.sortedByOpen === true) {
      this.setState({ sortedByOpen: false, venues: this.allVenues})
    } else {
      this.setState({
        sortedByOpen: true,
        venues: _.filter(array, (el) => { return /\d/.test(hoursToday(el.hours)) })
      });
    }
  }

  updateFilterList(state, filterTerm) {
    if (_.includes(state, filterTerm)) {
      this.setState({ filters: _.remove(state, (el) => (el !== filterTerm)) });
    } else {
      state.push(filterTerm);
      this.setState({ filters: state });
    }
  }

  componentDidMount() {
    this.getUserLocation();
  }

  render() {
    return (
      <div className="home">
        <section className="bg-near-white db-l dn fixed fl mt5 overflow-y-scroll vh-100 w-20-l shadow-1">
          <nav className="blue overflow-x-hidden">
            <h2 className="dark-gray f5 ph3 pv0">Sort:</h2>
              <ul className="b--light-silver bt list ml0 pl0">
                <li className="b--light-silver bb flex flex-row items-center justify-between ph3 pv1 ttc">
                  Nearby
                  <ToggleSwitch
                    toggleFunction={this.sortNearby}
                  />
                </li>
                <li className="b--light-silver bb flex flex-row items-center justify-between ph3 pv1 ttc">
                  Open Today
                  <ToggleSwitch
                    isOn={this.state.sortedByOpen}
                    toggleFunction={()=> {this.filterTodaysVenues(this.state.venues)}}
                  />
                </li>
            </ul>
            <h2 className="dark-gray f5 ph3 pv0">Include:</h2>
            <ul className="b--light-silver bt list ml0 pl0">
              {tags.map(el => (
                <li className="b--light-silver bb flex flex-row items-center justify-between ph3 pv1 ttc" key={el}>
                  {el}
                  <ToggleSwitch
                    isOn={this.state.filters.includes(el)}
                    name={el}
                    toggleFunction={() => { this.updateFilterList(this.state.filters, el)}}
                  />
                </li>
              ))}
            </ul>
          </nav>
        </section>

        <div className="fr w-80-l">
          {this.state.venues ? <VenueList userLocation={this.state.userLocation} venues={this.state.venues} /> : null}
        </div>
      </div>
    )
  }
}
