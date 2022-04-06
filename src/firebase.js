
//setting up firebase by adding the firbase project credentials

import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyALtLgBugSD2TvTfMONAjKiXpiJ1AZQpyk",
  authDomain: "test-e7807.firebaseapp.com",
  projectId: "test-e7807",
  storageBucket: "test-e7807.appspot.com",
  messagingSenderId: "355609821761",
  appId: "1:355609821761:web:b5f447627585dc03a3bcc0"
  };

firebase.initializeApp(firebaseConfig);
  


  

export default firebase;