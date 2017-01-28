import Rebase from 're-base';
import env from './env';

const Base = Rebase.createClass({
  apiKey: env.firebase.key,
  authDomain: env.firebase.domain,
  databaseURL: env.firebase.url,
})

export default Base;
