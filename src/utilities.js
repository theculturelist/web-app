import moment from 'moment';

const hoursToday = (hoursObject) => {
  const today = moment().format("dddd").toLowerCase();
  return hoursObject.hasOwnProperty(today) ? hoursObject[today] : null
}

export default hoursToday
