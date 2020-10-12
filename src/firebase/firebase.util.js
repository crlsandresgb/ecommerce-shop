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
 * add collections by get the collection key and items
 */
export const addCollectionsAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);
  /**set batch to lunch all at the same time */
  const batch = firestore.batch();
  /**add to batch */
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

/**
 * convert collection to map
 */
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};
/**
 * export auth and firestore
 */
export const auth = firebase.auth();
export const firestore = firebase.firestore();
/**get current user */
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unSubscribe = auth.onAuthStateChanged((userAuth) => {
      unSubscribe();
      resolve(userAuth);
    }, reject);
  });
};
/**
 * configure provider and google pop up
 */
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
