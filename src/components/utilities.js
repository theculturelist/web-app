import moment from 'moment'
import { getDistanceSimple } from 'geolib'

export const hoursToday = (hoursObject) => {
  const today = moment().format("dddd").toLowerCase();
  return hoursObject.hasOwnProperty(today) ? hoursObject[today] : null
}

export const metersAway = (userLoc, venueLoc) => {
    //FIXME: Fix the data on our end to return latitude and longitude
    const fixedLoc = { latitude: venueLoc.lat, longitude: venueLoc.lng }
    return getDistanceSimple(userLoc, fixedLoc)
  }

export const metersToMiles = (meters) => ( (meters * 0.000621371192).toFixed(1) )
