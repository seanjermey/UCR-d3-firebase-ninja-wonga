import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1TrwPfLAxrcts2Rf0lUV9J3gN7d2UJ3c",
  authDomain: "udemy-d3-firebase-678a0.firebaseapp.com",
  databaseURL: "https://udemy-d3-firebase-678a0.firebaseio.com",
  projectId: "udemy-d3-firebase-678a0",
  storageBucket: "udemy-d3-firebase-678a0.appspot.com",
  messagingSenderId: "91538193085",
  appId: "1:91538193085:web:09e9f3962d591937de15d4",
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (e) {}

export const db = firebase.firestore();
