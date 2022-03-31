// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-NeZlS1jwnULsgEC9d7acomnTnwgQYnM",
  authDomain: "proyecto-coder-f2370.firebaseapp.com",
  projectId: "proyecto-coder-f2370",
  storageBucket: "proyecto-coder-f2370.appspot.com",
  messagingSenderId: "749984419179",
  appId: "1:749984419179:web:3956f142e3924c1453902e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);