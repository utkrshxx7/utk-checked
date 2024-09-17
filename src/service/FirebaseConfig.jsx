// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB94N8qKUyG37QGRgy81pMsajObamRlCKE",
  authDomain: "ai-itinerary-1bd92.firebaseapp.com",
  projectId: "ai-itinerary-1bd92",
  storageBucket: "ai-itinerary-1bd92.appspot.com",
  messagingSenderId: "1068648219128",
  appId: "1:1068648219128:web:10c66871f85d028807960d",
  measurementId: "G-SJPBYVDR4V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);