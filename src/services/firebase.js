import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";
import firebaseConfig from "./firebaseConfig";

if (!!!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const firebaseApp = firebase;
export const firebaseAuth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const cloudFunctions = firebase.functions();

export default firebase;
