import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const app = firebase.initializeApp({
  apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
  projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
});

const db = firebase.database(app);
const Base = Rebase.createClass(db);

export default Base;
