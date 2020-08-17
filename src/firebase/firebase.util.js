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
 * create user function
 */
export const createUserProfileDocument = async (userAuth, additionalData) => {
  /**
   * check if user is log in
   */
  if (!userAuth) return;
  /**
   * check if user exist on DB
   */
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  /**
   * create user if the user exist
   */
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    /**
     * try to create user
     */
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error);
    }
  }
  /**
   * retunr user
   */
  return userRef;
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
