// import * as firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";

// google account > mas*******ter@gmail.com
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH_1yArDAg8mIiWvvFQIzpWaiQibpLxmQ",
  authDomain: "photokifts.firebaseapp.com",
  projectId: "photokifts",
  storageBucket: "photokifts.appspot.com",
  messagingSenderId: "1062890031382",
  appId: "1:1062890031382:web:1172a1e79e733b33a7e837"
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
