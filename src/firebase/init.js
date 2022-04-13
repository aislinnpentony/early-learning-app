import firebase from 'firebase'
import firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCUYaL_ubdplom_YaA79N9GZzXdAVwH3TE",
  authDomain: "early-learning-db.firebaseapp.com",
  databaseURL: "https://early-learning-db.firebaseio.com",
  projectId: "early-learning-db",
  storageBucket: "early-learning-db.appspot.com",
  messagingSenderId: "866922377904"
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()
