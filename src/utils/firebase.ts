// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAi7OnIcCVunI_JasWPGdLE1qgGXmZsi7U",
  authDomain: "vue-firebase-543da.firebaseapp.com",
  projectId: "vue-firebase-543da",
  storageBucket: "vue-firebase-543da.firebasestorage.app",
  messagingSenderId: "1031606167706",
  appId: "1:1031606167706:web:2cd37addfb3434fe3c5723"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(firebase);

export { auth, googleProvider, db };
