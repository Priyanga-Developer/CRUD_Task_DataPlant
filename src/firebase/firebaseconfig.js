// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 import {GoogleAuthProvider, getAuth} from "firebase/auth";
 import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6Q6nWcPoLEOXEU3QLVRo3lcE-AtlgBXY",
  authDomain: "practicereact-7733e.firebaseapp.com",
  projectId: "practicereact-7733e",
  storageBucket: "practicereact-7733e.appspot.com",
  messagingSenderId: "900449069843",
  appId: "1:900449069843:web:b5e8613027d16f656208e6",
  measurementId: "G-R7Q6MRPC0D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider= new GoogleAuthProvider();
export const dB=getFirestore(app);