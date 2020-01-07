import firebase from "firebase/app";
require('firebase/auth')
require('firebase/firestore')

const config = {
  apiKey: "AIzaSyDujxEscl8O6P1FF_vW15Ha3XfjdrN91aI",
  authDomain: "dragon-so-hail.firebaseapp.com",
  databaseURL: "https://dragon-so-hail.firebaseio.com",
  projectId: "dragon-so-hail",
  storageBucket: "dragon-so-hail.appspot.com",
  messagingSenderId: "946527161798",
  appId: "1:946527161798:web:cda7b27efb9770f3bdb6c7",
  measurementId: "G-MQEZCBF7H0"
};

export const createUserProfileDocument = async (userAuth , additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if(!snapShot.exists) {
    const { displayName , email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user' , error.message)
    }
  }
return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;