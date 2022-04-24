import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCUuXxisY9-_GEB-EtyDVVSIYynHLBLeoo",
  authDomain: "early-learning-app-db.firebaseapp.com",
  projectId: "early-learning-app-db",
  storageBucket: "early-learning-app-db.appspot.com",
  messagingSenderId: "544480238540",
  appId: "1:544480238540:web:d3e0203b2c1ff4d6775b69",
  measurementId: "G-738TJGHNHX"
}

const firebaseApp = firebase.initializeApp(Config);
firebaseApp.firestore().settings({ })

const db = firebase.App.firestore();
const usersCollection = db.collection('users')
export default firebaseApp.firestore()
