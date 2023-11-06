import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCU15bB0snzM-Xs2ac79eBKAf37nh-c8pY",
  authDomain: "next-auth1-68fa2.firebaseapp.com",
  projectId: "next-auth1-68fa2",
  storageBucket: "next-auth1-68fa2.appspot.com",
  messagingSenderId: "546500349952",
  appId: "1:546500349952:web:2ea9f9d55f403b1af988e5",
  measurementId: "G-H6520T84W0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

/*
// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU15bB0snzM-Xs2ac79eBKAf37nh-c8pY",
  authDomain: "next-auth1-68fa2.firebaseapp.com",
  projectId: "next-auth1-68fa2",
  storageBucket: "next-auth1-68fa2.appspot.com",
  messagingSenderId: "546500349952",
  appId: "1:546500349952:web:2ea9f9d55f403b1af988e5",
  measurementId: "G-H6520T84W0"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth};


const analytics = getAnalytics(app);

function getAuth() {
    throw new Error("Function not implemented.");
}
*/