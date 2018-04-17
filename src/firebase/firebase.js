import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCXaPOHeZzA1i8m8mOpglP0qBMl594jneU",
  authDomain: "react-eisenhower-matrix.firebaseapp.com",
  databaseURL: "https://react-eisenhower-matrix.firebaseio.com",
  projectId: "react-eisenhower-matrix",
  storageBucket: "react-eisenhower-matrix.appspot.com",
  messagingSenderId: "684469513534"
};
firebase.initializeApp(config);

const auth = firebase.auth();
const db = firebase.database();

export {
  auth,
  db
};