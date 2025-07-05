// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOl1w_-RjQw9wqd7JEwcKR8SBDZUptzEs",
  authDomain: "interview-app-816fe.firebaseapp.com",
  projectId: "interview-app-816fe",
  storageBucket: "interview-app-816fe.firebasestorage.app",
  messagingSenderId: "652382422460",
  appId: "1:652382422460:web:2f598055a03f0a9cccd7b9",
  measurementId: "G-5Q8MZV165B",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
