/**
 * import core
 */
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
/**
 * add config
 */
const config = {
  apiKey: "AIzaSyD9NQXfcb0aIiEgAWh7Qq2ja2kJeRCiFrI",
  authDomain: "ecommerce-675e3.firebaseapp.com",
  databaseURL: "https://ecommerce-675e3.firebaseio.com",
  projectId: "ecommerce-675e3",
  storageBucket: "ecommerce-675e3.appspot.com",
  messagingSenderId: "265297597443",
  appId: "1:265297597443:web:2c83da6d68258af26f6a36",
  measurementId: "G-XS5KDVXQWT",
};
/**
 * init firebase
 */
firebase.initializeApp(config);
/**
 * export auth and firestore
 */
export const auth = firebase.auth();
export const firestore = firebase.firestore();
/**
 * configure provider and google pop up
 */
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
