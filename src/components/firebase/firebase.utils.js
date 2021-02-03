import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyD9IE58DFfkG6kvUmTc9Vx_Td8PydmuZ_k",
    authDomain: "gameboardx.firebaseapp.com",
    projectId: "gameboardx",
    storageBucket: "gameboardx.appspot.com",
    messagingSenderId: "742040896598",
    appId: "1:742040896598:web:7f41cd5ef0e6e40f2467f7",
    measurementId: "G-505Z7TLGK2"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;
