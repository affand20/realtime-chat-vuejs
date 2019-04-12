import firebase from 'firebase'
import firestore from 'firebase/firestore'

var config = {
    apiKey: "AIzaSyAQ2rSqkJuFClS4e95Yn4ZLNlT9or3t1Cg",
    authDomain: "kosanqu-82e57.firebaseapp.com",
    databaseURL: "https://kosanqu-82e57.firebaseio.com",
    projectId: "kosanqu-82e57",
    storageBucket: "kosanqu-82e57.appspot.com",
    messagingSenderId: "50288671198"
  };
  const firebaseApp = firebase.initializeApp(config);

  export default firebaseApp.firestore()
