import * as firebase from 'firebase';

// Websocket for Live Sync between React App State & Firebase Realtime Database
const Rebase = require('re-base');

const config = {
  apiKey: "AIzaSyCXaPOHeZzA1i8m8mOpglP0qBMl594jneU",
  authDomain: "react-eisenhower-matrix.firebaseapp.com",
  databaseURL: "https://react-eisenhower-matrix.firebaseio.com",
  projectId: "react-eisenhower-matrix",
  storageBucket: "react-eisenhower-matrix.appspot.com",
  messagingSenderId: "684469513534"
};

// Re-Base Configs
const fbdb = firebase.initializeApp(config);
const base = Rebase.createClass(fbdb.database());

// Firebase Elements
const auth = fbdb.auth();
const db = fbdb.database();

export {
  auth,
  base,
  db
};