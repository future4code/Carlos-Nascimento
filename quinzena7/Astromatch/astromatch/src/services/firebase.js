import firebase from 'firebase/app'
import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAnqSjOTrDylBglMbxFnMN9wois7vkbF5k",
  authDomain: "astromatch-e304f.firebaseapp.com",
  databaseURL: "https://astromatch-e304f-default-rtdb.firebaseio.com",
  projectId: "astromatch-e304f",
  storageBucket: "astromatch-e304f.appspot.com",
  messagingSenderId: "976319507393",
  appId: "1:976319507393:web:e0c061e21925fbd4149d40",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
export {firebase, auth}
