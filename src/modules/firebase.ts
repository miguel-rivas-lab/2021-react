import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBQL-s1Nx5E1RSmKO-SaVGGUEM4_rYKOAs",
  authDomain: "portfolio-e08b9.firebaseapp.com",
  projectId: "portfolio-e08b9",
  storageBucket: "portfolio-e08b9.appspot.com",
  messagingSenderId: "242330667069",
  appId: "1:242330667069:web:702aaf351232c301558254",
  measurementId: "G-QTX08NPNKV"
};

export const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();