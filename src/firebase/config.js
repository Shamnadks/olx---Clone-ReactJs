import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1_G-yz-UNrPBSr8V08rGaEi6gokpsqkc",
  authDomain: "olx-clone-206a6.firebaseapp.com",
  projectId: "olx-clone-206a6",
  storageBucket: "olx-clone-206a6.appspot.com",
  messagingSenderId: "461638591352",
  appId: "1:461638591352:web:3aed96dd01bd1d175d9e8d",
  measurementId: "G-KQGNJBM7CC"
};

export default firebase.initializeApp(firebaseConfig)