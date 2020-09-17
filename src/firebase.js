import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBYNxI-sUc4y2C4cDA-JVLKXm6oVA_HG_Y",
  authDomain: "myzone-challenge.firebaseapp.com",
  databaseURL: "https://myzone-challenge.firebaseio.com",
  projectId: "myzone-challenge",
  storageBucket: "myzone-challenge.appspot.com",
  messagingSenderId: "903477133713",
  appId: "1:903477133713:web:0ba5be15044024957a1a30",
  measurementId: "G-B59CRZ985X",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
