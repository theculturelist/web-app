import Rebase from 're-base';
import config from './config';

const Base = Rebase.createClass({
  apiKey: config.firebase.key,
  authDomain: config.firebase.domain,
  databaseURL: config.firebase.url,
})

export default Base;
