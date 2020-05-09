import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


var firebaseConfig = {
  apiKey: "AIzaSyBC2O-kkPLL2u1gpf7ln7DhhBNRoN1R2tg",
  authDomain: "canadacolleges-c1eaa.firebaseapp.com",
  databaseURL: "https://canadacolleges-c1eaa.firebaseio.com",
  projectId: "canadacolleges-c1eaa",
  storageBucket: "canadacolleges-c1eaa.appspot.com",
  messagingSenderId: "899973006967",
  appId: "1:899973006967:web:0d778c1425f048744c6872"
};


export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;

export const googleLogin = () => {
  const googleAuth = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(googleAuth);
}