import firebase from 'firebase/app'
import 'firebase/firestore'


let config = {
  apiKey: "AIzaSyDQJytlwb4lowOcevFuFogiadBiRIJJymQ",
  authDomain: "the-treehouse-preschool.firebaseapp.com",
  databaseURL: "https://the-treehouse-preschool.firebaseio.com",
  projectId: "the-treehouse-preschool",
  storageBucket: "",
  messagingSenderId: "55746299943"
};

const firebaseApp = firebase.initializeApp(config)
const firestore = firebaseApp.firestore()
const settings = {
  timestampsInSnapshots: true
};

firestore.settings(settings);


export default { firebaseApp, firestore }